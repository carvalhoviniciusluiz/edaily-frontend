import React, { useState, useEffect } from 'react';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import Swal from 'sweetalert2';

import {
  MdAccessTime,
  MdSupervisorAccount,
  MdPermIdentity,
} from 'react-icons/md';
import ToolbarMenu from '~/components/ToolbarMenu';

import api from '~/services/api';

import PDFViewer from '~/components/PDFViewer';

import { Container, Panel } from './styles';

export default function Dashboard() {
  const [meta, setMeta] = useState({});
  const [matters, setMatters] = useState([]);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    async function loadMatters() {
      const { limit = '', page = '' } = meta;
      const response = await api.get(`matters?limit=${limit}&page=${page}`);
      const { data, ...rest } = response.data;

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      setMeta(rest);
      setMatters(
        data.map(({ createdAt, ...params }) => {
          const datetime = utcToZonedTime(createdAt, timezone);

          return {
            ...params,
            date: format(datetime, "dd/MM/yyyy", { locale: pt }), // eslint-disable-line
            time: format(datetime, "HH:mm", { locale: pt }), // eslint-disable-line
            createdAt: utcToZonedTime(createdAt, timezone),
          };
        })
      );
    }
    loadMatters();
  }, []) // eslint-disable-line

  const handleDelete = async id => {
    const { value } = await Swal.fire({
      type: 'question',
      title: 'Você tem certeza',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      heightAuto: false,
    });

    if (value) {
      setMatters(
        matters.filter(matter => {
          if (matter.id === id) {
            api.delete(`files/${matter.file.id}`);
          }

          return matter.id !== id;
        })
      );
    }
  };

  return (
    <>
      <ToolbarMenu />

      <Container>
        <header>
          <strong>Aguardando liberação</strong>
        </header>

        {url && <PDFViewer url={url} toggleRender={setUrl} />}

        <ul>
          {matters.map(matter => (
            <Panel key={matter.id}>
              <div>
                <strong className="time">{matter.time}</strong>
                <strong>
                  <MdSupervisorAccount size={22} />
                  <span>{matter.organization.initials}</span>
                </strong>
                <strong>
                  <MdPermIdentity size={22} />
                  <span>
                    {matter.author.firstname} {matter.author.lastname}
                  </span>
                </strong>
                <strong>
                  <MdAccessTime />
                  <span>{matter.date}</span>
                </strong>
              </div>
              <div>
                <p>
                  <a
                    href="#viewer"
                    rel="noopener noreferrer"
                    onClick={() => setUrl(matter.file.url)}
                  >
                    {matter.file.name}
                  </a>
                </p>

                <button
                  type="button"
                  className="delete"
                  onClick={() => handleDelete(matter.id)}
                >
                  Excluir
                </button>
                <button type="button" className="send">
                  Enviar
                </button>
              </div>
            </Panel>
          ))}
        </ul>
      </Container>
    </>
  );
}
