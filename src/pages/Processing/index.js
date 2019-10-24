import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';

import {
  MdChevronLeft,
  MdChevronRight,
  MdAccessTime,
  MdSupervisorAccount,
  MdPermIdentity,
} from 'react-icons/md';

import ToolbarMenu from '~/components/ToolbarMenu';
import PDFViewer from '~/components/PDFViewer';

import { Container, Panel, Button } from './styles';

import {
  matterRequest,
  matterDestroy,
  matterForward,
  matterClean,
} from '~/store/modules/matter/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.matter.data);
  const meta = useSelector(state => state.matter.meta);

  const [matters, setMatters] = useState([]);

  const [desablePrev, setDesablePrev] = useState(true);
  const [desableNext, setDesableNext] = useState(false);

  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    dispatch(matterRequest({ page }));
    return () => dispatch(matterClean());
  }, [page]); // eslint-disable-line

  useEffect(() => setMatters(data), [data]);

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
            dispatch(matterDestroy(matter.file.id));
          }
          return matter.id !== id;
        })
      );
    }
  };

  const handleForward = async id => {
    const { value } = await Swal.fire({
      type: 'question',
      title: 'Você confirma essa ação',
      text: 'Essa matéria poderá ser visualizada pelo acompanhamento',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      heightAuto: false,
    });

    if (value) {
      setMatters(
        matters.filter(matter => {
          if (matter.id === id) {
            dispatch(matterForward(matter.id));
          }
          return matter.id !== id;
        })
      );
    }
  };

  function handlePrevPage() {
    setDesablePrev(page < meta.pages);
    setDesableNext(meta.page === 1);

    setPage(page - 1);
  }

  function handleNextPage() {
    setDesablePrev(desableNext);
    setDesableNext(page + 1 === meta.pages);

    setPage(page + 1);
  }

  return (
    <>
      <ToolbarMenu />

      <Container>
        <header>
          <Button type="button" onClick={handlePrevPage} desable={desablePrev}>
            <MdChevronLeft size={36} color="#fff" />
          </Button>
          <strong>Aguardando liberação</strong>
          <Button type="button" onClick={handleNextPage} desable={desableNext}>
            <MdChevronRight size={36} color="#fff" />
          </Button>
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
                <button
                  type="button"
                  className="send"
                  onClick={() => handleForward(matter.id)}
                >
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
