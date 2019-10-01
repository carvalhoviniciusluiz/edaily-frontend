import React from 'react';

import { MdAttachFile } from 'react-icons/md';
import { Container, ProgressBar } from './styles';

export default function FileUpload() {
  // function handleProgress(progress, event) {}

  return (
    <Container>
      <div className="table-responsive">
        <table className="table-striped">
          <thead>
            <tr>
              <th width="50px">#</th>
              <th width="50%">Nome</th>
              <th width="50px">Tamanho</th>
              <th className="text-center">%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div>nome do arquivo</div>
              </td>
              <td>
                <div>4 MB</div>
              </td>
              <td>
                <div className="progress sm">
                  <ProgressBar className="progress-bar" percent="100" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="actions">
        <label className="btn file-uploads" htmlFor="upload">
          <strong>Anexar</strong>
          <input type="file" id="upload" />
          <MdAttachFile size={18} />
        </label>
      </div>
    </Container>
  );
}
