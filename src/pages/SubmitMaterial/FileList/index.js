import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import { Container, FileInfo } from './styles';

// import Preview from './Preview';

export default function FileList({ files, onDelete }) {
  return (
    <Container>
      {files.map(file => (
        <li key={file.id}>
          <FileInfo>
            {/* <Preview file={file.preview} /> */}
            <div>
              <strong>{file.name}</strong>
              <span>
                {!!file.url && (
                  <button type="button" onClick={() => onDelete(file.id)}>
                    Excluir
                  </button>
                )}
                {file.readableSize}
              </span>
            </div>
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
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {file.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      ))}
    </Container>
  );
}

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
