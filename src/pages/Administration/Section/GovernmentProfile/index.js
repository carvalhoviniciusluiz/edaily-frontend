/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {
  MdChevronLeft,
  MdChevronRight,
  MdBookmark,
  MdBookmarkBorder,
  MdDateRange,
  MdAccessTime,
  MdPerson,
  MdPersonOutline,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdEdit,
} from 'react-icons/md';

import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import PageFullscreen from '~/components/PageFullscreen';

import NewProfile from '../NewProfile';
import {
  Header,
  Title,
  Info,
  Navigation,
  NavigationContent,
  BtnNavigation,
  PanelList,
  Panel,
  PanelBody,
  PanelAction,
  PanelHeader,
  PanelInfo,
  PanelEvent,
  PanelEventActions,
  BtnActive,
  BtnInactive,
  BtnEdit,
  BtnAdd,
} from './styles';

export default function GovernmentProfile({ ...res }) {
  const [showModal, setShowModal] = useState(false);

  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  const handleActive = async () => {
    const { value } = await Swal.fire({
      type: 'question',
      title: 'Você tem certeza',
      text: 'Essa sessão será ativada',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      heightAuto: false,
    });

    if (value) {
      console.tron.log('active..');
    }
  };

  const handleInactive = async () => {
    const { value } = await Swal.fire({
      type: 'question',
      title: 'Você tem certeza',
      text: 'Essa sessão está prestes a ser inativada',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim',
      heightAuto: false,
    });

    if (value) {
      console.tron.log('inactive..');
    }
  };

  return (
    <PageFullscreen open={open} setOpen={setOpen} background="#f8f8f8">
      <NewProfile show={showModal} setShow={setShowModal} />

      <Header>
        <Title>Sessão 01</Title>

        <Info>
          Atualizado em: <span>27/12/2019</span> <span>09:29</span>
        </Info>

        <Info>
          Usuário: <span>Vinicius</span> <span className="last">Carvalho</span>
        </Info>

        <Info className="last">
          Situação: <span>Ativo</span>
        </Info>
      </Header>

      <Navigation>
        <BtnNavigation desable>
          <MdChevronLeft size={36} color="#333" />
        </BtnNavigation>

        <NavigationContent>
          <input type="text" />
          <strong>/</strong>
          <strong>3</strong>
        </NavigationContent>

        <BtnNavigation desable>
          <MdChevronRight size={36} color="#333" />
        </BtnNavigation>
      </Navigation>

      <PanelList>
        <Panel>
          <PanelAction>
            <MdKeyboardArrowUp size={44} />
            <MdKeyboardArrowDown size={44} />
          </PanelAction>

          <PanelBody>
            <PanelHeader>
              <PanelInfo className="inactive">
                <MdBookmarkBorder size={22} />
                <span>Inativo</span>
              </PanelInfo>

              <PanelInfo className="active">
                <MdBookmark size={22} />
                <span>Ativo</span>
              </PanelInfo>

              <PanelInfo className="creator">
                <MdPerson size={22} />
                <span>
                  Vinicius
                  <span>Carvalho</span>
                </span>
              </PanelInfo>

              <PanelInfo className="revisor">
                <MdPersonOutline size={22} />
                <span>
                  Vinicius
                  <span>Carvalho</span>
                </span>
              </PanelInfo>

              <PanelInfo className="date">
                <MdDateRange />
                <span>27/12/2019</span>
              </PanelInfo>

              <PanelInfo className="time">
                <MdAccessTime />
                <span>09:29</span>
              </PanelInfo>
            </PanelHeader>

            <PanelEvent>
              <strong>AUTARQUIAS ESTADUAIS E ÓRGÃOS VINCULADOS</strong>

              <PanelEventActions>
                <BtnInactive onClick={handleInactive}>
                  <span>Inativar</span>
                  <MdBookmarkBorder />
                </BtnInactive>
                <BtnActive onClick={handleActive}>
                  <span>Ativar</span>
                  <MdBookmark />
                </BtnActive>
                <BtnEdit onClick={() => setShowModal(true)}>
                  <span>Editar</span>
                  <MdEdit />
                </BtnEdit>
              </PanelEventActions>
            </PanelEvent>
          </PanelBody>
        </Panel>

        <Panel>
          <PanelAction>
            <MdKeyboardArrowUp size={44} />
            <MdKeyboardArrowDown size={44} />
          </PanelAction>

          <PanelBody>
            <PanelHeader>
              <PanelInfo className="inactive">
                <MdBookmarkBorder size={22} />
                <span>Inativo</span>
              </PanelInfo>

              <PanelInfo className="active">
                <MdBookmark size={22} />
                <span>Ativo</span>
              </PanelInfo>

              <PanelInfo className="creator">
                <MdPerson size={22} />
                <span>
                  Vinicius
                  <span>Carvalho</span>
                </span>
              </PanelInfo>

              <PanelInfo className="revisor">
                <MdPersonOutline size={22} />
                <span>
                  Vinicius
                  <span>Carvalho</span>
                </span>
              </PanelInfo>

              <PanelInfo className="date">
                <MdDateRange />
                <span>27/12/2019</span>
              </PanelInfo>

              <PanelInfo className="time">
                <MdAccessTime />
                <span>09:29</span>
              </PanelInfo>
            </PanelHeader>

            <PanelEvent>
              <strong>SUPERINTENDÊNCIA DE VIGILÂNCIA EM SAÚDE</strong>

              <PanelEventActions>
                <BtnInactive onClick={handleInactive}>
                  <span>Inativar</span>
                  <MdBookmarkBorder />
                </BtnInactive>
                <BtnActive onClick={handleActive}>
                  <span>Ativar</span>
                  <MdBookmark />
                </BtnActive>
                <BtnEdit onClick={() => setShowModal(true)}>
                  <span>Editar</span>
                  <MdEdit />
                </BtnEdit>
              </PanelEventActions>
            </PanelEvent>
          </PanelBody>
        </Panel>

        <Panel>
          <PanelAction>
            <MdKeyboardArrowUp size={44} />
            <MdKeyboardArrowDown size={44} />
          </PanelAction>

          <PanelBody>
            <PanelHeader>
              <PanelInfo className="inactive">
                <MdBookmarkBorder size={22} />
                <span>Inativo</span>
              </PanelInfo>

              <PanelInfo className="active">
                <MdBookmark size={22} />
                <span>Ativo</span>
              </PanelInfo>

              <PanelInfo className="creator">
                <MdPerson size={22} />
                <span>
                  Vinicius
                  <span>Carvalho</span>
                </span>
              </PanelInfo>

              <PanelInfo className="revisor">
                <MdPersonOutline size={22} />
                <span>
                  Vinicius
                  <span>Carvalho</span>
                </span>
              </PanelInfo>

              <PanelInfo className="date">
                <MdDateRange />
                <span>27/12/2019</span>
              </PanelInfo>

              <PanelInfo className="time">
                <MdAccessTime />
                <span>09:29</span>
              </PanelInfo>
            </PanelHeader>

            <PanelEvent>
              <strong>ORGÃOS ESTRATÉGICOS DE EXECUÇÃO</strong>

              <PanelEventActions>
                <BtnInactive onClick={handleInactive}>
                  <span>Inativar</span>
                  <MdBookmarkBorder />
                </BtnInactive>
                <BtnActive onClick={handleActive}>
                  <span>Ativar</span>
                  <MdBookmark />
                </BtnActive>
                <BtnEdit onClick={() => setShowModal(true)}>
                  <span>Editar</span>
                  <MdEdit />
                </BtnEdit>
              </PanelEventActions>
            </PanelEvent>
          </PanelBody>
        </Panel>
      </PanelList>

      <BtnAdd onClick={() => setShowModal(true)}>+</BtnAdd>
    </PageFullscreen>
  );
}

GovernmentProfile.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
