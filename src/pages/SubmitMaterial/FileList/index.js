import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CircularProgressbar } from 'react-circular-progressbar';

import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import { Container, FileInfo, FileActions } from './styles';

import PDFViewer from './PDFViewer';

export default function FileList({ files, onDelete }) {
  const [target, setTarget] = useState(null);

  const toggleRender = id => {
    setTarget(id);
  };

  return (
    <Container>
      {files.map(file => (
        <li key={file.id}>
          <FileInfo>
            <FileActions>
              <strong>{file.name}</strong>
              <span>
                {!!file.url && (
                  <button type="button" onClick={() => onDelete(file.id)}>
                    Excluir
                  </button>
                )}
                {file.readableSize}
              </span>
            </FileActions>
          </FileInfo>

          <div>
            {!file.uploaded && !file.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: '#7159c1' },
                }}
                strokeWidth={10}
                value={file.progress}
              />
            )}

            {file.url && (
              <a
                href="#viewer"
                rel="noopener noreferrer"
                onClick={() => toggleRender(file.id)}
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {file.error && <MdError size={24} color="#e57878" />}
          </div>

          {file.id === target && (
            <PDFViewer file={file} toggleRender={toggleRender} />
          )}
        </li>
      ))}
    </Container>
  );
}

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};