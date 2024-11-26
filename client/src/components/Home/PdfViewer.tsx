import { useEffect } from 'react';

const PdfViewer = () => {
  useEffect(() => {
    document.title = 'CV';
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        height: '100vh',
        width: '100vw',
        margin: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <iframe
        src="/CV.JPG"
        title="CV"
        style={{
          width: '80%',
          height: '80vh',
          maxHeight: '90%',
          maxWidth: '90%',
          border: 'none',
          display: 'block',
          margin: 'auto',
        }}
      ></iframe>
    </div>
  );
};

export default PdfViewer;


