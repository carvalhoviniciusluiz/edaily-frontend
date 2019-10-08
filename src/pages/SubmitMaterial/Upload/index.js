import React, { PureComponent } from 'react';

import { uniqueId } from 'lodash';
import filesize from 'filesize';

import FileUpload from '../FileUpload';
import FileList from '../FileList';

import api from '~/services/api';

export default class Upload extends PureComponent {
  state = {
    uploadedFiles: []
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return uploadedFile.id === id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    api.post('avatars', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);

        this.updateFile(uploadedFile.id, { progress });
      },
    });
  };

  handleUpload = async acceptFiles => {
    const processFiles = acceptFiles.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setState({
      uploadedFiles: [...this.state.uploadedFiles, ...processFiles]
    })

    processFiles.forEach(this.processUpload);
  };

  render() {
    return (
      <>
        <FileUpload onUpload={this.handleUpload} />
        {!!this.state.uploadedFiles.length && <FileList files={this.state.uploadedFiles} />}
      </>
    );
  }
};
