import React, { useEffect, useState } from 'react';

const OnlineCounter = ({ count, onlineUsers }) => {

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const checkSpinner = () => {
      const el = document.querySelector('#croquet_spinnerOverlay');
      setIsLoading(!!el);
    };

    const interval = setInterval(checkSpinner, 100);
    return () => clearInterval(interval);
  }, []);

  const [isHovering, setIsHovering] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsHovering(false);
    }, 500);
  };

  return (
    <div
      className="online-counter-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="online-counter" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Online:</span>
        {isLoading ? (

          <span
            className="loading-spinner"
            style={{ width: '16px', height: '16px', borderWidth: '2px' }}
            title="Sincronizando com o multisynq, se isso demorar demais, tente recarregar a página. isso afeta os jogos e os status de online e escrevendo."
          />
        ) : (

          <span>{count}</span>
        )}
      </div>

      {isHovering && !isLoading && onlineUsers && onlineUsers.length > 0 && (
        <div
          className="online-users-list"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4>Usuários online</h4>
          <ul>
            {onlineUsers.map((user) => (
              <li key={user.userId}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OnlineCounter;
