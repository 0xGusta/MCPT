import React, { useEffect, useState } from 'react';

const OnlineCounter = ({ count }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkSpinner = () => {
      const el = document.querySelector('#croquet_spinnerOverlay');
      setIsLoading(!!el);
    };

    const interval = setInterval(checkSpinner, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="online-counter" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>Online:</span>
      {isLoading ? (
        <span 
          className="loading-spinner" 
          style={{ width: '16px', height: '16px', borderWidth: '2px' }}
          title="Sincronizando com o multisynq, se isso demorar demais, tente recarregar a página. isso afeto os jogos e os status de online e escrevendo."
        />
      ) : (
        <span>{count}</span>
      )}
    </div>
  );
};

export default OnlineCounter;
