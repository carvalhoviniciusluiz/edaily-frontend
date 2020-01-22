import React, { useState, useEffect } from 'react';
import {
  MdAccessTime,
  MdSupervisorAccount,
  MdPermIdentity,
  MdGames,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '~/components/Pagination';
import PDFViewer from '~/components/PDFViewer';
import ToolbarMenu from '~/components/ToolbarMenu/Client';
import {
  documentFollowRequest,
  documentFollowFetch,
  documentFollowClean,
} from '~/store/modules/client/follower/actions';

import Modal from './Modal';
import {
  Container,
  Panel,
  ListPanel,
  PanelActions,
  PanelBody,
  ActionTitle,
  BtnAction,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const data = useSelector(state => state.follow.data);
  const meta = useSelector(state => state.follow.meta);

  const [documents, setDocuments] = useState([]);

  const [url, setUrl] = useState(null);
  const [show, setShow] = useState(false);

  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    setInputValue(page);
    dispatch(documentFollowRequest({ page, profile }));
    return () => dispatch(documentFollowClean());
  }, [page]); // eslint-disable-line

  useEffect(() => {
    setDocuments(data);
  }, [data]);

  const handleDocumentClick = async documentUUID => {
    await dispatch(documentFollowFetch({ documentUUID, profile }));

    setShow(true);
  };

  return (
    <>
      <ToolbarMenu />

      <Modal show={show} setShow={setShow} />

      <Container>
        <Pagination
          meta={meta}
          page={page}
          setPage={setPage}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        {url && <PDFViewer url={url} toggleRender={setUrl} />}

        <ListPanel>
          {documents.map(document => (
            <Panel key={document.uuid}>
              <PanelBody>
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
              </PanelBody>
              <PanelActions>
                <ActionTitle>
                  <strong>{document.protocolNumber}</strong>
                  <span
                    onClick={() => setUrl(document.file.url)}
                    role="presentation"
                  >
                    {document.file.name}
                  </span>
                </ActionTitle>

                <BtnAction
                  onClick={() => handleDocumentClick(document.uuid)}
                  role="presentation"
                >
                  <MdGames />
                </BtnAction>
              </PanelActions>
            </Panel>
          ))}
        </ListPanel>
      </Container>
    </>
  );
}
