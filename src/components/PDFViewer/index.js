import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Document, Page, pdfjs } from 'react-pdf';
import { FaSpinner } from 'react-icons/fa';

import { Lockscreen, Loading, NotFound, TryAgain, TextBox } from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer({ url, toggleRender }) {
  const [numPages, setNumPages] = useState(null);

  const handleClose = () => {
    toggleRender(null);
  };

  const onDocumentLoadSuccess = document => {
    setNumPages(document.numPages);
  };

  document.addEventListener(
    'keydown',
    event => {
      if (event.keyCode === 27) {
        handleClose();
      }
    },
    false
  );

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
        error={
          <TryAgain onClick={handleClose}>
            <TextBox>
              <strong>Por favor, tente novamente.</strong>
              <span>Falha ao carregar o arquivo PDF.</span>
            </TextBox>
          </TryAgain>
        }
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
