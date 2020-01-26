import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import AvatarOrIdenticon from '~/components/AvatarOrIdenticon';
import Pagination from '~/components/Pagination';
import ToolbarMenu from '~/components/ToolbarMenu/Client';
import { request, fetch, clean } from '~/store/modules/client/user/actions';

import Modal from './Modal';
import NewUser from './NewUser';
import { Container, UserList, UserPanel, PanelAction, BtnAdd } from './styles';

export default function User() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const data = useSelector(state => state.clientUser.data);
  const meta = useSelector(state => state.clientUser.meta);
  const openModal = useSelector(state => state.clientUser.openModal);

  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(1);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInputValue(page);
    dispatch(request({ page, profile }));
    return () => dispatch(clean());
  }, [page]); // eslint-disable-line

  useEffect(() => {
    setUsers(data);
  }, [data]);

  useEffect(() => {
    if (openModal) {
      setShow(true);
    }
  }, [openModal]);

  const handleUserClick = async uuid => {
    await dispatch(fetch({ profile, uuid }));
  };

  return (
    <>
      <ToolbarMenu />

      <Modal show={show} setShow={setShow} />
      <NewUser open={open} setOpen={setOpen} />

      <Container>
        <Pagination
          meta={meta}
          page={page}
          setPage={setPage}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        <UserList length={users.length}>
          {users.map(user => (
            <UserPanel
              key={String(user.uuid)}
              inactive={user.is_active && !user.confirmed_at}
              className="with-shading"
            >
              <AvatarOrIdenticon
                user={user || {}}
                size={45}
                encapsulated={false}
              />

              <PanelAction
                inactive={user.is_active && !user.confirmed_at}
                onClick={() => handleUserClick(user.uuid)}
              >
                <strong>
                  {user.firstname} {user.lastname}
                </strong>
                <span>{user.cpf}</span>
              </PanelAction>
            </UserPanel>
          ))}
        </UserList>

        <BtnAdd onClick={() => setOpen(true)}>
          <FaPlus size={32} />
        </BtnAdd>
      </Container>
    </>
  );
}
