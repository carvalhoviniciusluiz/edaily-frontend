import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import {
  MdChevronLeft,
  MdChevronRight,
  MdDateRange,
  MdAccessTime,
  MdBookmark,
  MdBookmarkBorder,
  MdPerson,
  MdPersonOutline,
} from 'react-icons/md';

import Swal from 'sweetalert2';

import ToolbarMenu from '~/components/ToolbarMenu/Administration';

import GovernmentProfile from './GovernmentProfile';
import Modal from './Modal';
import {
  Container,
  Navigation,
  NavigationContent,
  BtnAdd,
  BtnActive,
  BtnInactive,
  BtnEdit,
  BtnNavigation,
  PanelList,
  Panel,
  PanelHeader,
  PanelBody,
} from './styles';

export default function Section() {
  const [showModal, setShowModal] = useState(false);
  const [showPage, setShowPage] = useState(true);

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
    <>
      <ToolbarMenu />

      <Modal show={showModal} setShow={setShowModal} />
      <GovernmentProfile open={showPage} setOpen={setShowPage} />

      <Container>
        <Navigation>
          <BtnNavigation desable>
            <MdChevronLeft size={36} color="#fff" />
          </BtnNavigation>

          <NavigationContent>
            <input type="text" />
            <strong>/</strong>
            <strong>3</strong>
          </NavigationContent>

          <BtnNavigation desable>
            <MdChevronRight size={36} color="#fff" />
          </BtnNavigation>
        </Navigation>

        <PanelList>
          <Panel>
            <PanelHeader>
              <strong className="active">
                <MdBookmark size={22} />
                <span>Ativo</span>
              </strong>
              <strong className="inactive">
                <MdBookmarkBorder size={22} />
                <span>Inativo</span>
              </strong>
              <strong className="creator">
                <MdPerson size={22} />
                <span>
                  Vinicius
                  <span>Carvalho</span>
                </span>
              </strong>
              <strong className="revisor">
                <MdPersonOutline size={22} />
                <span>
                  Vinicius
                  <span>Carvalho</span>
                </span>
              </strong>
              <strong className="date">
                <MdDateRange />
                <span>27/12/2019</span>
              </strong>
              <strong className="time">
                <MdAccessTime />
                <span>09:29</span>
              </strong>
            </PanelHeader>
            <PanelBody>
              <p>
                <strong role="presentation" onClick={() => setShowPage(true)}>
                  Sessão 01
                </strong>
              </p>

              <BtnActive onClick={handleActive}>Ativar</BtnActive>
              <BtnInactive onClick={handleInactive}>Inativar</BtnInactive>
              <BtnEdit onClick={() => setShowModal(true)}>Editar</BtnEdit>
            </PanelBody>
          </Panel>
        </PanelList>

        <BtnAdd onClick={() => setShowModal(true)}>
          <FaPlus size={32} />
        </BtnAdd>
      </Container>
    </>
  );
}
