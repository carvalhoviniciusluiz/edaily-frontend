import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Document, Page, pdfjs } from 'react-pdf';
import { FaSpinner } from 'react-icons/fa';

import { Lockscreen, Loading, NotFound } from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer({ url, toggleRender }) {
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
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <Loading>
            <FaSpinner color="#FFF" size={44} />
          </Loading>
        }
        noData={<NotFound>Nenhum arquivo PDF encontrado.</NotFound>}
      >
        {Array.from(new Array(numPages), (_, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            scale={1.2}
            loading="carregando.."
          />
        ))}
      </Document>
    </Lockscreen>
  );
}

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired,
  toggleRender: PropTypes.func.isRequired,
};
