import React from 'react';
import Dropzone from 'react-dropzone';

import PropTypes from 'prop-types';

import { DropContainer, UploadMessage } from './styles';

export default function DropRegion({ onUpload }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste seus PDF&apos;s aqui..</UploadMessage>;
    }
    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return (
      <UploadMessage type="success">
        Arraste e solte seus PDF aqui ou clique para selecionar
      </UploadMessage>
    );
  }

  return (
    <Dropzone accept="application/pdf" onDrop={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}

DropRegion.propTypes = {
  onUpload: PropTypes.func.isRequired,
};
