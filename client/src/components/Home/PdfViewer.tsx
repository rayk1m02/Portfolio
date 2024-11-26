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
        height: '100vh'
      }}
    >
      <img
        src="/img/CV.JPG"
        alt="CV"
        style={{
          position: 'absolute',
          top: '52%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '33%',
          height: '80vh',
          maxHeight: '90%',
          maxWidth: '90%',
        }}
      />
    </div>
  );
};

export default PdfViewer;


