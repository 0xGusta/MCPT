import React, { useEffect, useState, useRef } from 'react';

export default function ChallengeModal({ isOpen, challenge, onAccept, onDecline }) {
    const [timeLeft, setTimeLeft] = useState(10);
    const timerRef = useRef(null);

    const onDeclineRef = useRef(onDecline);
    useEffect(() => {
        onDeclineRef.current = onDecline;
    }, [onDecline]);

    useEffect(() => {
        if (isOpen && challenge) {
            clearInterval(timerRef.current);
            setTimeLeft(10);
            timerRef.current = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timerRef.current);
                        onDeclineRef.current(challenge.id);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [isOpen, challenge?.id]);

    if (!isOpen || !challenge) {
        return null;
    }

    const gameName = challenge.game === 'jogodavelha' ? 'Jogo da Velha' : 'Tetris';

    return (
        <div 
            className="fixed top-5 left-5 z-50 w-300 rounded-lg p-4 shadow-lg text-white animate-slideInLeft"
            style={{ 
                background: 'linear-gradient(135deg, #1A1A2E, #16213E)', 
                border: '1px solid #374151' 
            }}
        >
            <h2 className="text-xl font-bold mb-2">Desafio de Jogo! ⚔️</h2>
            <p className="text-gray-300 mb-4">
                <span className="font-semibold">{challenge.challenger.username}</span> desafiou você para uma partida de <span className="font-semibold">{gameName}</span>!
            </p>
            
            <div className="w-full bg-gray-700 rounded-full h-1.5 mb-4">
                 <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: `${timeLeft * 10}%`, transition: 'width 0.5s linear' }}></div>
            </div>

            <p className="text-gray-400 text-sm mb-4 text-center">
                Tempo de expiração: {timeLeft}s
            </p>

            <div className="flex gap-2 justify-end">
                <button onClick={() => onDecline(challenge.id)} className="btn btn-secondary">
                    Recusar
                </button>
                <button onClick={() => onAccept(challenge.id)} className="btn btn-primary">
                    Aceitar
                </button>
            </div>
        </div>
    );
}
