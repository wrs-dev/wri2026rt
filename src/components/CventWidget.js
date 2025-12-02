import React, { useEffect, useRef } from 'react';

const CventWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptId = 'cvent-widget-script';
    // Only add the script if it isn't already present
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://web.cvent.com/event_guest/v1/embed/14e29c3a-93d6-432e-8583-2be73c144cbd.js';
      document.body.appendChild(script);
    }

    // Handle postMessage from Cvent to adjust widget height
    const handlePostMessage = (event) => {
      if (event.origin !== 'https://web.cvent.com') return;

      const { data } = event;
      if (data?.message === 'registrationLoaded' && widgetRef.current) {
        widgetRef.current.style.height = `${data.height}px`;
      }
    };

    window.addEventListener('message', handlePostMessage);

    return () => {
      // Cleanup: remove the script if you want a fresh reload each time
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.removeEventListener('message', handlePostMessage);
    };
  }, []);

  // The ref is used for dynamic height. "data-cvt-embed" is required by Cvent.
  return <div ref={widgetRef} className="w-100 cvt-embed" data-cvt-embed />;
};

export default CventWidget;