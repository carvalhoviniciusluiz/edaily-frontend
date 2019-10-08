import React from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

export default function FileUpload({ onUpload }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste seus arquivos aqui..</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return (
      <UploadMessage type="success">
        Arraste e solte seus arquivos aqui ou clique para selecionar
      </UploadMessage>
    );
  }

  return (
    <Dropzone accept="image/*" onDrop={onUpload}>
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
