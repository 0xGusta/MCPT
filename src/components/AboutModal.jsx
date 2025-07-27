import React from 'react';

export default function AboutModal({ isOpen, onClose, onConfirm, forceConfirm = false }) {
    if (!isOpen) return null;

    const handleClose = forceConfirm ? () => {} : onClose;

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4">Sobre o MonChat</h2>
                    <div className="about-modal text-left space-y-3 text-sm max-h-[300px] overflow-y-auto pr-2 styled-scrollbar">
                        <p>
                            Obrigado por usar o MonChat! Este site é um projeto independente e não possui ligação oficial com a equipe da Monad.
                        </p>
                        <p>
                            Por favor, não envie informações pessoais sensíveis ou conteúdo impróprio no chat. Toda a atividade aqui é pública na blockchain. Não nos responsabilizamos por vazamentos, exposição de dados ou quaisquer danos causados pelo uso indevido da plataforma.
                        </p>
                        <p>
                            O site é experimental e pode conter bugs ou instabilidades. Se você for afetado significativamente por algum problema, sinta-se à vontade para contatar o desenvolvedor.
                        </p>
                        <p>
                            Você pode ser banido ou ter mensagens removidas do chat se violar os termos de uso, como envio de spam, conteúdo ilegal ou ofensivo. A equipe do MonChat reserva-se o direito de banir usuários que não respeitem as diretrizes da comunidade.
                        </p>
                        <p>
                            O MonChat é um projeto de código aberto. Você pode ver o código-fonte no <a href="https://github.com/0xGusta/MCPT" target="_blank" rel="noopener noreferrer">GitHub</a>. O código do contrato pode ser visualizado no <a href="https://testnet.monadexplorer.com/address/0xB08111985e1a891605fa095AB9d52A93aDdC95a0?tab=Contract" target="_blank" rel="noopener noreferrer">MonVision</a>.
                        </p>
                        <p className="text-gray-400">
                            Lembre-se: Ao interagir aqui, você está ciente de que tudo o que enviar será registrado na Blockchain.
                        </p>
                        <p style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                gap: '0.5rem', 
                                flexWrap: 'wrap',
                                textAlign: 'center'
                            }}>
                            Desenvolvido com suporte de 
                                <img style={{ maxWidth: '150px' }} src="/images/MonadLogo.svg" alt="Logo da Monad" />
                                <img style={{ maxWidth: '150px' }} src="/images/multisynq.svg" alt="Logo do Multisynq" />
                        </p>
                    </div>
                    <p>Desenvolvido por: <br />
                    <a
                        href="https://x.com/0xGustavo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img style={{ width: '20px', height: '20px', marginTop: '2px'}} src="/images/x.svg" alt="Logo X" />0xGus
                    </a></p>
                    <button onClick={onConfirm || onClose} className="btn btn-primary mt-4">
                        Concordar e Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
