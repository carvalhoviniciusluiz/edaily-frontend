import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Identicon from 'react-identicons';

import ToolbarMenu from '~/components/ToolbarMenu';

import Modal from './Modal';

import { Container, ArrowButton, UserPanel } from './styles';

import { request, fetch, clean } from '~/store/modules/client/user/actions';

export default function User() {
  const dispatch = useDispatch();
  const organization = useSelector(state => state.user.profile.organization);

  const data = useSelector(state => state.clientUser.data);
  const meta = useSelector(state => state.clientUser.meta);

  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(1);
  const [show, setShow] = useState(false);

  const [desablePrev, setDesablePrev] = useState(true);
  const [desableNext, setDesableNext] = useState(false);

  useEffect(() => {
    const { uuid: organizationId } = organization;

    dispatch(request({ page, organizationId }));
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

  const handleUserClick = async userId => {
    const { uuid: organizationId } = organization;

    await dispatch(fetch({ organizationId, userId }));
    setShow(true);
  };

  return (
    <>
      <ToolbarMenu />

      <Modal show={show} setShow={setShow} />

      <Container length={users.length}>
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
              key={String(user.uuid)}
              inative={!user.is_active}
              className="with-shading"
            >
              {user.avatar ? (
                <img src={user.avatar.avatar} alt="Avatar" />
              ) : (
                <Identicon
                  string={`${user.firstname} ${user.lastname}`}
                  size={45}
                  bg="#fff"
                  fg="#333"
                />
              )}

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
