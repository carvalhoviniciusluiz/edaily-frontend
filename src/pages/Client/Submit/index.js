import React, { PureComponent } from 'react';

import { uniqueId } from 'lodash';
import filesize from 'filesize';

import ToolbarMenu from '~/components/ToolbarMenu';

import DropRegion from './DropRegion';
import FileList from './FileList';

import { Container, Form } from './styles';

import api from '~/services/api';

export default class FileUpload extends PureComponent {
  state = {
    uploadedFiles: [],
  };

  updateFile = (id, data) => {
    const { uploadedFiles } = this.state;

    this.setState({
      uploadedFiles: uploadedFiles.map(uploadedFile => {
        return uploadedFile.id === id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      }),
    });
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    api
      .post('files', data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);

          this.updateFile(uploadedFile.id, { progress });
        },
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data.uuid,
          url: response.data.url,
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true,
        });
      });
  };

  handleUpload = async acceptFiles => {
    const { uploadedFiles } = this.state;

    const processFiles = acceptFiles.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setState({
      uploadedFiles: [...uploadedFiles, ...processFiles],
    });

    processFiles.forEach(this.processUpload);
  };

  handlerDelete = async id => {
    const { uploadedFiles } = this.state;

    await api.delete(`files/${id}`);

    this.setState({
      uploadedFiles: uploadedFiles.filter(file => file.id !== id),
    });
  };

  handleClicked = () => {
    const input = document.querySelector('input[type=file]');

    input.click();
  };

  render() {
    const { uploadedFiles } = this.state;

    return (
      <>
        <ToolbarMenu />

        <Container>
          <header>
            <strong>Formulário de envio de matéria</strong>
          </header>
          <Form>
            <DropRegion onUpload={this.handleUpload} />
            {!!uploadedFiles.length && (
              <FileList files={uploadedFiles} onDelete={this.handlerDelete} />
            )}

            <hr />

            <button type="submit" onClick={this.handleClicked}>
              Buscar PDf's
            </button>
          </Form>
        </Container>
      </>
    );
  }
}
