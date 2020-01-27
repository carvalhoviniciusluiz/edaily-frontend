/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  MdAccessTime,
  MdPeople,
  MdPerson,
  MdPersonOutline,
  MdMenu,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import AvatarOrIdenticon from '~/components/AvatarOrIdenticon';
import PageFullscreen from '~/components/PageFullscreen';
import Pagination from '~/components/Pagination';
import PDFViewer from '~/components/PDFViewer';
import { request, clean } from '~/store/modules/client/document/actions';

import {
  Fullname,
  Email,
  PanelList,
  Panel,
  FlagPanel,
  PanelAction,
  PanelInfo,
  BtnHistory,
} from './styles';

export default function PanelComponent({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  const user = useSelector(state => state.clientUser.user);
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  const data = useSelector(state => state.document.data);
  const meta = useSelector(state => state.document.meta);

  const [documents, setDocuments] = useState([]);

  const [inputValue, setInputValue] = useState(1);

  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setInputValue(page);
    dispatch(request({ page, profile, user }));
    return () => dispatch(clean());
  }, [page]); // eslint-disable-line

  useEffect(() => setDocuments(data), [data]);

  return (
    <PageFullscreen open={open} setOpen={setOpen} background="#f8f8f8">
      <AvatarOrIdenticon user={user || {}} size={120} encapsulated>
        <Fullname>
          {user.firstname} {user.lastname}
        </Fullname>
        <Email>{user.email}</Email>
      </AvatarOrIdenticon>

      <Pagination
        meta={meta}
        page={page}
        setPage={setPage}
        inputValue={inputValue}
        setInputValue={setInputValue}
        color="#333"
        inputColor="#fff"
      />

      {url && <PDFViewer url={url} toggleRender={setUrl} />}

      <PanelList>
        {documents.map(document => (
          <Panel key={document.uuid} className="with-shading">
            <FlagPanel>
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
            </FlagPanel>

            <PanelAction>
              <PanelInfo>
                {document.protocol && <strong>{document.protocol}</strong>}
                <span
                  onClick={() => setUrl(document.file.url)}
                  role="presentation"
                >
                  {document.file.name}
                </span>
              </PanelInfo>

              <BtnHistory>
                <MdMenu />
                histórico
              </BtnHistory>
            </PanelAction>
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
