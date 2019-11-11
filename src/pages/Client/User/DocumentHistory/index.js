/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Identicon from 'react-identicons';

import {
  MdChevronLeft,
  MdChevronRight,
  MdAccessTime,
  MdPeople,
  MdPerson,
  MdPersonOutline,
  MdMenu,
} from 'react-icons/md';

import PageFullscreen from '~/components/PageFullscreen';
import PDFViewer from '~/components/PDFViewer';

import { Avatar, Navigation, Button, PanelList, Panel } from './styles';

import { request, clean } from '~/store/modules/client/document/actions';

export default function PanelComponent({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  const user = useSelector(state => state.clientUser.user);
  const organization = useSelector(state => state.user.profile.organization);

  const dispatch = useDispatch();

  const data = useSelector(state => state.document.data);
  const meta = useSelector(state => state.document.meta);

  const [documents, setDocuments] = useState([]);

  const [inputValue, setInputValue] = useState(1);

  const [desablePrev, setDesablePrev] = useState(true);
  const [desableNext, setDesableNext] = useState(false);

  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    dispatch(
      request({ page, organizationId: organization.uuid, userId: user.uuid })
    );
    return () => dispatch(clean());
  }, [page]); // eslint-disable-line

  useEffect(() => setDocuments(data), [data]);

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

  return (
    <PageFullscreen open={open} setOpen={setOpen} background="#f8f8f8">
      <Avatar>
        {user && user.avatar ? (
          <img src={user.avatar.avatar} alt="Avatar" />
        ) : (
          <Identicon
            string={`${user && user.firstname} ${user && user.lastname}`}
            size={120}
            bg="#fff"
            fg="#333"
          />
        )}

        <strong>
          {user.firstname} {user.lastname}
        </strong>
        <span>{user.email}</span>
      </Avatar>

      <Navigation>
        <Button type="button" onClick={handlePrevPage} desable={desablePrev}>
          <MdChevronLeft size={36} color="#333" />
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
        <Button type="button" onClick={handleNextPage} desable={desableNext}>
          <MdChevronRight size={36} color="#333" />
        </Button>
      </Navigation>

      {url && <PDFViewer url={url} toggleRender={setUrl} />}

      <PanelList>
        {documents.map(document => (
          <Panel key={document._id} className="with-shading">
            <div>
              <strong className="time">{document.time}</strong>
              <strong>
                <MdPeople size={22} />
                <span>{document.organization.initials}</span>
              </strong>
              {document.responsable && (
                <strong className="responsable">
                  <MdPerson size={22} />
                  <span>
                    {document.responsable.firstname}
                    <span>{document.responsable.lastname}</span>
                  </span>
                </strong>
              )}
              <strong className="author">
                <MdPersonOutline size={22} />
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

              <span>
                <MdMenu />
                histórico
              </span>
            </div>
          </Panel>
        ))}
      </PanelList>
    </PageFullscreen>
  );
}

PanelComponent.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
