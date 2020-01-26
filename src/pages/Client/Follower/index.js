import React, { useState, useEffect } from 'react';
import { MdPermIdentity, MdGames } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '~/components/Pagination';
import PDFViewer from '~/components/PDFViewer';
import ToolbarMenu from '~/components/ToolbarMenu/Client';
import {
  documentFollowRequest,
  documentFollowFetch,
  documentFollowClean,
} from '~/store/modules/client/follower/actions';

import FlagCancellation from './Components/FlagCancellation';
import FlagDate from './Components/FlagDate';
import FlagForwarding from './Components/FlagForwarding';
import FlagTime from './Components/FlagTime';
import Modal from './Modal';
import {
  Container,
  Panel,
  ListPanel,
  PanelActions,
  FlagPanel,
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
            <Panel
              key={document.uuid}
              canceled={
                document.cancellation
                  ? document.cancellation.canceledAt
                  : undefined
              }
            >
              <FlagPanel
                canceled={!!document.cancellation}
                forwarded={!!document.forwarding}
              >
                <FlagTime document={document} />
                <strong className="author">
                  <MdPermIdentity size={22} />
                  <span>
                    {document.author.firstname}
                    <span>{document.author.lastname}</span>
                  </span>
                </strong>
                <FlagCancellation document={document} />
                <FlagForwarding document={document} />
                <FlagDate
                  document={document}
                  show={!document.cancellation && !document.forwarding}
                />
              </FlagPanel>
              <PanelActions>
                <ActionTitle
                  canceled={!!document.cancellation}
                  forwarded={!!document.forwarding}
                >
                  {document.protocol && <strong>{document.protocol}</strong>}
                  <span
                    onClick={() => setUrl(document.file.url)}
                    role="presentation"
                  >
                    {document.file.name}
                  </span>
                </ActionTitle>

                {!document.cancellation && document.forwarding && (
                  <BtnAction
                    canceled={!!document.cancellation}
                    forwarded={!!document.forwarding}
                    onClick={() => handleDocumentClick(document.uuid)}
                    role="presentation"
                  >
                    <MdGames />
                  </BtnAction>
                )}
              </PanelActions>
            </Panel>
          ))}
        </ListPanel>
      </Container>
    </>
  );
}
