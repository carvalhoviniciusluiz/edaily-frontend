import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import {
  MdChevronLeft,
  MdChevronRight,
  MdDateRange,
  MdAccessTime,
  MdBookmark,
  MdBookmarkBorder,
  MdPermIdentity,
} from 'react-icons/md';

import Swal from 'sweetalert2';

import ToolbarMenu from '~/components/ToolbarMenu/Administration';

import Modal from './Modal';
import {
  Container,
  Navegation,
  NavegationContent,
  BtnAdd,
  BtnActive,
  BtnInactive,
  BtnEdit,
  BtnNavegation,
  PanelList,
  Panel,
  PanelHeader,
  PanelBody,
} from './styles';

export default function Section() {
  const [show, setShow] = useState(false);

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

      <Modal show={show} setShow={setShow} />

      <Container>
        <Navegation>
          <BtnNavegation desable>
            <MdChevronLeft size={36} color="#fff" />
          </BtnNavegation>

          <NavegationContent>
            <input type="text" />
            <strong>/</strong>
            <strong>3</strong>
          </NavegationContent>

          <BtnNavegation desable>
            <MdChevronRight size={36} color="#fff" />
          </BtnNavegation>
        </Navegation>

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
              <strong>
                <MdPermIdentity size={22} />
                <span className="firstname">
                  Vinicius
                  <span className="lastname">Carvalho</span>
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
                <strong role="presentation" onClick={() => {}}>
                  Sessão 01
                </strong>
              </p>

              <BtnActive onClick={handleActive}>Ativar</BtnActive>
              <BtnInactive onClick={handleInactive}>Inativar</BtnInactive>
              <BtnEdit onClick={() => setShow(true)}>Editar</BtnEdit>
            </PanelBody>
          </Panel>
        </PanelList>

        <BtnAdd onClick={() => setShow(true)}>
          <FaPlus size={32} />
        </BtnAdd>
      </Container>
    </>
  );
}
