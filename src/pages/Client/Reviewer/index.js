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
  documentRequest,
  documentDestroy,
  documentForward,
  documentClean,
} from '~/store/modules/document/processing/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.documentprocess.data);
  const meta = useSelector(state => state.documentprocess.meta);

  const [documents, setDocuments] = useState([]);

  const [desablePrev, setDesablePrev] = useState(true);
  const [desableNext, setDesableNext] = useState(false);

  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    dispatch(documentRequest({ page }));
    return () => dispatch(documentClean());
  }, [page]); // eslint-disable-line

  useEffect(() => setDocuments(data), [data]);

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
      setDocuments(
        documents.filter(document => {
          if (document.id === id) {
            dispatch(documentDestroy(document.file.id));
          }
          return document.id !== id;
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
      setDocuments(
        documents.filter(document => {
          if (document.id === id) {
            dispatch(documentForward(document.id));
          }
          return document.id !== id;
        })
      );
    }
  };

  function handlePrevPage() {
    const newPage = page - 1;
    if (newPage === meta.pages) return;

    setPage(newPage);
    setDesablePrev(newPage === 1);
    setDesableNext(newPage === meta.pages);
  }

  function handleNextPage() {
    const newPage = page + 1;
    if (newPage > meta.pages) {
      setDesableNext(true);
      return;
    }

    setPage(newPage);
    setDesablePrev(desableNext);
    setDesableNext(newPage === meta.pages);
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
          {documents.map(document => (
            <Panel key={document.id} className="with-shading">
              <div>
                <strong className="time">{document.time}</strong>
                <strong>
                  <MdSupervisorAccount size={22} />
                  <span>{document.organization.initials}</span>
                </strong>
                <strong>
                  <MdPermIdentity size={22} />
                  <span>
                    {document.author.firstname}
                    <span>{document.author.lastname}</span>
                  </span>
                </strong>
                <strong>
                  <MdAccessTime />
                  <span>{document.date}</span>
                </strong>
              </div>
              <div>
                <p>
                  <a
                    href="#viewer"
                    rel="noopener noreferrer"
                    onClick={() => setUrl(document.file.url)}
                  >
                    {document.file.name}
                  </a>
                </p>

                <button
                  type="button"
                  className="delete"
                  onClick={() => handleDelete(document.id)}
                >
                  Excluir
                </button>
                <button
                  type="button"
                  className="send"
                  onClick={() => handleForward(document.id)}
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
