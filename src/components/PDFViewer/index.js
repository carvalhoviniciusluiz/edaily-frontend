import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Document, Page, pdfjs } from 'react-pdf';
import { FaSpinner, FaCheck, FaInfo } from 'react-icons/fa';

import {
  Lockscreen,
  DocumentHistory,
  Loading,
  NotFound,
  TryAgain,
  TextBox,
} from './styles';

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
      <DocumentHistory>
        <h4> Histórico </h4>
        <ul>
          <li>
            <div className="timeline-figure">
              <span className="check success">
                <FaCheck />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria criada </h6>
              <span>08/18/2018 – 12:42 PM</span>
            </div>
          </li>
          <li>
            <div className="timeline-figure">
              <span className="check success">
                <FaCheck />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria enviada </h6>
              <span>08/18/2018 – 12:42 PM</span>
            </div>
          </li>
          <li>
            <div className="timeline-figure">
              <span className="check success">
                <FaCheck />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria na revisão </h6>
              <span>08/19/2018 – 09:11 AM</span>
            </div>
          </li>
          <li>
            <div className="timeline-figure">
              <span className="check error">
                <FaInfo />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria devolvida </h6>
              <span>08/19/2018 – 10:36 AM</span>
            </div>
          </li>
          <li>
            <div className="timeline-figure">
              <span className="check warn">
                <FaCheck />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria corrigida </h6>
              <span>08/19/2018 – 10:36 AM</span>
            </div>
          </li>
          <li>
            <div className="timeline-figure">
              <span className="check success">
                <FaCheck />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria revisada </h6>
              <span>08/19/2018 – 10:36 AM</span>
            </div>
          </li>
          <li>
            <div className="timeline-figure">
              <span className="check success">
                <FaCheck />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria na diagramação </h6>
              <span>12/21/2018 – 12:42 PM</span>
            </div>
          </li>
          <li>
            <div className="timeline-figure">
              <span className="check done">
                <FaCheck />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria diagramada </h6>
            </div>
          </li>
          <li>
            <div className="timeline-figure">
              <span className="check done">
                <FaCheck />
              </span>
            </div>
            <div className="timeline-body">
              <h6> Matéria publicada </h6>
            </div>
          </li>
        </ul>
      </DocumentHistory>

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
