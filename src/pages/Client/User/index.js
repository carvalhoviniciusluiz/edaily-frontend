import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import ToolbarMenu from '~/components/ToolbarMenu';

import {
  Container,
  ArrowButton,
  UserPanel,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CancelButton,
  SaveButton,
} from './styles';

import { request, clean } from '~/store/modules/client/user/actions';

import Modal from '~/components/Modal';

export default function User() {
  const dispatch = useDispatch();
  const organization = useSelector(state => state.user.profile.organization);

  const data = useSelector(state => state.clientUser.data);
  const meta = useSelector(state => state.clientUser.meta);

  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  const [desablePrev, setDesablePrev] = useState(true);
  const [desableNext, setDesableNext] = useState(false);

  useEffect(() => {
    dispatch(request({ page, organization }));
    return () => dispatch(clean());
  }, [page]); // eslint-disable-line

  useEffect(() => {
    setUsers(data);
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

  const handleUserClick = uuid => {
    console.tron.log(uuid);

    setModalShow(true);
  };

  return (
    <>
      <ToolbarMenu />

      <Modal show={modalShow} height={500}>
        <ModalHeader>
          <h4 className="modal-title">
            Vinicius <span>Carvalho</span> <small>#424-67554-5643-64533</small>
          </h4>
          <button type="button" onClick={() => setModalShow(false)}>
            <span>×</span>
          </button>
        </ModalHeader>

        <ModalBody>
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </ModalBody>

        <ModalFooter>
          <CancelButton onClick={() => setModalShow(false)}>
            cancelar
          </CancelButton>
          <SaveButton>Salvar</SaveButton>
        </ModalFooter>
      </Modal>

      <Container>
        <header>
          <ArrowButton onClick={handlePrevPage} desable={desablePrev}>
            <MdChevronLeft size={36} color="#fff" />
          </ArrowButton>
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
          <ArrowButton onClick={handleNextPage} desable={desableNext}>
            <MdChevronRight size={36} color="#fff" />
          </ArrowButton>
        </header>

        <ul>
          {users.map(user => (
            <UserPanel
              key={String(user.id)}
              inative={!user.is_active}
              length={users.length}
              className="with-shading"
            >
              <img src={user.avatar.avatar} alt="Avatar" />

              <div
                role="presentation"
                onClick={() => handleUserClick(user.uuid)}
              >
                <strong>
                  {user.firstname} {user.lastname}
                </strong>
                <span>{user.cpf}</span>
              </div>
            </UserPanel>
          ))}
        </ul>
      </Container>
    </>
  );
}
