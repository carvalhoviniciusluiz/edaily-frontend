import React, { useState, useEffect } from 'react';
import {
  MdAccessTime,
  MdSupervisorAccount,
  MdPermIdentity,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';

import Pagination from '~/components/Pagination';
import PDFViewer from '~/components/PDFViewer';
import ToolbarMenu from '~/components/ToolbarMenu/Client';
import {
  reviewerRequest,
  reviewerDestroy,
  reviewerForward,
  reviewerClean,
} from '~/store/modules/client/document/actions';

import {
  Container,
  Panel,
  ListPanel,
  FlagPanel,
  PanelActions,
  ActionTitle,
  BtnCancel,
  BtnSend,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const data = useSelector(state => state.document.reviewer.data);
  const meta = useSelector(state => state.document.reviewer.meta);

  const [documents, setDocuments] = useState([]);

  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(null);

  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    setInputValue(page);
    dispatch(reviewerRequest({ page }));
    return () => dispatch(reviewerClean());
  }, [page]); // eslint-disable-line

  useEffect(() => {
    setDocuments(data);
  }, [data]);

  const handleCancel = async uuid => {
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
          if (document.uuid === uuid) {
            dispatch(reviewerDestroy(document.file.uuid));
          }
          return document.uuid !== uuid;
        })
      );
    }
  };

  const handleForward = async uuid => {
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
          if (document.uuid === uuid) {
            dispatch(reviewerForward(document.uuid, profile));
          }
          return document.uuid !== uuid;
        })
      );
    }
  };

  return (
    <>
      <ToolbarMenu />

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
              <FlagPanel>
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
              </FlagPanel>
              <PanelActions>
                <ActionTitle>
                  <a
                    href="#viewer"
                    rel="noopener noreferrer"
                    onClick={() => setUrl(document.file.url)}
                  >
                    {document.file.name}
                  </a>
                </ActionTitle>

                <BtnCancel onClick={() => handleCancel(document.uuid)}>
                  Sustar
                </BtnCancel>
                <BtnSend onClick={() => handleForward(document.uuid)}>
                  Enviar
                </BtnSend>
              </PanelActions>
            </Panel>
          ))}
        </ListPanel>
      </Container>
    </>
  );
}
