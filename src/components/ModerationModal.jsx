import React, { useState } from 'react';

export default function ModerationModal({ isOpen, onClose, action, onConfirm }) {
    const [username, setUsername] = useState('');
    const [processing, setProcessing] = useState(false);

    const handleConfirm = async () => {
        if (!username.trim()) return;
        try {
            setProcessing(true);
            await onConfirm(username.trim());
            onClose();
            setUsername('');
        } catch (error) {
            console.error('Error in moderation action:', error);
        } finally {
            setProcessing(false);
        }
    };

    if (!isOpen) return null;

    const getTitle = () => {
        switch (action) {
            case 'ban': return 'Banir usuário';
            case 'unban': return 'Desbanir usuário';
            case 'addModerator': return 'Adicionar moderador';
            case 'removeModerator': return 'Remover moderador';
            default: return 'Ação de moderação';
        }
    };

    const getDescription = () => {
        switch (action) {
            case 'ban': return 'Digite o nome de usuário que você deseja banir:';
            case 'unban': return 'Digite o nome de usuário que você deseja desbanir:';
            case 'addModerator': return 'Digite o nome de usuário que você deseja tornar moderador:';
            case 'removeModerator': return 'Digite o nome de usuário moderador que você deseja remover:';
            default: return 'Digite o nome de usuário:';
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <h2 className="text-xl font-bold mb-4">{getTitle()}</h2>
                <p className="text-gray-300 mb-4">{getDescription()}</p>
                <div className="input-group">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" placeholder="Nome de usuário" maxLength={32} />
                </div>
                <div className="flex gap-2 justify-end">
                    <button onClick={onClose} className="btn btn-secondary" disabled={processing}>Cancelar</button>
                    <button onClick={handleConfirm} className="btn btn-primary" disabled={processing || !username.trim()}>{processing ? 'Processando...' : 'Confirmar'}</button>
                </div>
            </div>
        </div>
    );
}