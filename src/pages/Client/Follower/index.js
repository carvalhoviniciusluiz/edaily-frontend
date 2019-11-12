import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MdChevronLeft,
  MdChevronRight,
  MdAccessTime,
  MdSupervisorAccount,
  MdPermIdentity,
  MdGames,
} from 'react-icons/md';

import ToolbarMenu from '~/components/ToolbarMenu';
import PDFViewer from '~/components/PDFViewer';

import Modal from './Modal';

import { Container, Panel, Button } from './styles';

import {
  documentFollowRequest,
  documentFollowFetch,
  documentFollowClean,
} from '~/store/modules/client/follower/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const data = useSelector(state => state.follow.data);
  const meta = useSelector(state => state.follow.meta);

  const [documents, setDocuments] = useState([]);

  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(null);
  const [show, setShow] = useState(false);

  const [inputValue, setInputValue] = useState(1);

  const [desablePrev, setDesablePrev] = useState(true);
  const [desableNext, setDesableNext] = useState(false);

  useEffect(() => {
    setInputValue(page);
    dispatch(documentFollowRequest({ page }));
    return () => dispatch(documentFollowClean());
  }, [page]); // eslint-disable-line

  useEffect(() => {
    setDocuments(data);
  }, [data]);

  const handleChangeInputValue = e => {
    setInputValue(e.target.value);
  };

  const handleFetchPage = e => {
    if (!e.target.value) {
      setInputValue(page);
      return;
    }
    setPage(e.target.value);
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

  const handleDocumentClick = async documentId => {
    await dispatch(documentFollowFetch({ documentId }));

    setShow(true);
  };

  return (
    <>
      <ToolbarMenu />

      <Modal show={show} setShow={setShow} />

      <Container>
        <header>
          <Button onClick={handlePrevPage} desable={desablePrev}>
            <MdChevronLeft size={36} color="#fff" />
          </Button>
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleChangeInputValue}
              onBlur={handleFetchPage}
            />
            <strong>/</strong>
            <strong>{meta.pages}</strong>
          </div>
          <Button onClick={handleNextPage} desable={desableNext}>
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
                    {document.responsable.firstname}
                    <span>{document.responsable.lastname}</span>
                  </span>
                </strong>
                <strong>
                  <MdAccessTime />
                  <span>{document.date}</span>
                </strong>
              </div>
              <div className="actions">
                <p>
                  <strong>{document.protocolNumber}</strong>
                  <span
                    onClick={() => setUrl(document.file.url)}
                    role="presentation"
                  >
                    {document.file.name}
                  </span>
                </p>

                <span
                  onClick={() => handleDocumentClick(document.id)}
                  role="presentation"
                >
                  <MdGames />
                </span>
              </div>
            </Panel>
          ))}
        </ul>
      </Container>
    </>
  );
}
