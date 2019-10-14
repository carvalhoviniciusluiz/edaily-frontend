import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Document, Page, pdfjs } from 'react-pdf';

import { Lockscreen } from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer({ file, toggleRender }) {
  const [numPages, setNumPages] = useState(null);

  document.addEventListener(
    'keydown',
    event => {
      if (event.keyCode === 27) {
        toggleRender(null);
      }
    },
    false
  );

  const onDocumentLoadSuccess = document => {
    setNumPages(document.numPages);
  };

  return (
    <Lockscreen>
      <Document file={file.preview} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, i) => (
          <Page key={`page_${i + 1}`} pageNumber={i + 1} scale={1.2} />
        ))}
      </Document>
    </Lockscreen>
  );
}

PDFViewer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  file: PropTypes.object.isRequired,
  toggleRender: PropTypes.func.isRequired,
};
