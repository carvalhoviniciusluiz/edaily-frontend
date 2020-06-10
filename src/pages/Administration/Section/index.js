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
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md';

import Swal from 'sweetalert2';

import ToolbarMenu from '~/components/ToolbarMenu/Administration';

import GovernmentProfile from './GovernmentProfile';
import NewSection from './NewSection';
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
  PanelAction,
  PanelBody,
  PanelInfo,
  PanelHeader,
  PanelEvent,
  PanelEventActions,
} from './styles';

export default function Section() {
  // const [showModal, setShowModal] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [open, setOpen] = useState(false);

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

      {/* <NewSection show={showModal} setShow={setShowModal} /> */}
      <NewSection open={open} setOpen={setOpen} />
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
                    <span className="lastname">Carvalho</span>
                  </span>
                </PanelInfo>

                <PanelInfo className="revisor">
                  <MdPersonOutline size={22} />
                  <span>
                    Vinicius
                    <span className="lastname">Carvalho</span>
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
                <p>
                  <strong role="presentation" onClick={() => setShowPage(true)}>
                    Sessão 01
                  </strong>
                </p>

                <PanelEventActions>
                  <BtnInactive onClick={handleInactive}>Inativar</BtnInactive>
                  <BtnActive onClick={handleActive}>Ativar</BtnActive>
                  <BtnEdit onClick={() => setOpen(true)}>Editar</BtnEdit>
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
                    <span className="lastname">Carvalho</span>
                  </span>
                </PanelInfo>

                <PanelInfo className="revisor">
                  <MdPersonOutline size={22} />
                  <span>
                    Vinicius
                    <span className="lastname">Carvalho</span>
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
                <p>
                  <strong role="presentation" onClick={() => setShowPage(true)}>
                    Sessão 02
                  </strong>
                </p>

                <PanelEventActions>
                  <BtnInactive onClick={handleInactive}>Inativar</BtnInactive>
                  <BtnActive onClick={handleActive}>Ativar</BtnActive>
                  <BtnEdit onClick={() => setOpen(true)}>Editar</BtnEdit>
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
                    <span className="lastname">Carvalho</span>
                  </span>
                </PanelInfo>

                <PanelInfo className="revisor">
                  <MdPersonOutline size={22} />
                  <span>
                    Vinicius
                    <span className="lastname">Carvalho</span>
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
                <p>
                  <strong role="presentation" onClick={() => setShowPage(true)}>
                    Sessão 03
                  </strong>
                </p>

                <PanelEventActions>
                  <BtnInactive onClick={handleInactive}>Inativar</BtnInactive>
                  <BtnActive onClick={handleActive}>Ativar</BtnActive>
                  <BtnEdit onClick={() => setOpen(true)}>Editar</BtnEdit>
                </PanelEventActions>
              </PanelEvent>
            </PanelBody>
          </Panel>
        </PanelList>

        <BtnAdd onClick={() => setOpen(true)}>
          <FaPlus size={32} />
        </BtnAdd>
      </Container>
    </>
  );
}
