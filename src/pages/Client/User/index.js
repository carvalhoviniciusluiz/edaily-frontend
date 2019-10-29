import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import ToolbarMenu from '~/components/ToolbarMenu';

import { Container, Button, UserPanel } from './styles';

import { request, clean } from '~/store/modules/client/user/actions';

export default function User() {
  const dispatch = useDispatch();
  const organization = useSelector(state => state.user.profile.organization);

  const data = useSelector(state => state.clientUser.data);
  const meta = useSelector(state => state.clientUser.meta);

  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(1);

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

  return (
    <>
      <ToolbarMenu />

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

        <ul>
          {users.map(user => (
            <UserPanel
              key={String(user.id)}
              inative={false}
              length={users.length}
              className="with-shading"
            >
              <img src={user.avatar.avatar} alt="Avatar" />

              <a href="#avatar">
                <strong>
                  {user.firstname} {user.lastname}
                </strong>
                <span>{user.cpf}</span>
              </a>
            </UserPanel>
          ))}
        </ul>
      </Container>
    </>
  );
}
