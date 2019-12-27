import React from 'react';
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

import ToolbarMenu from '~/components/ToolbarMenu/Administration';

import {
  Container,
  Navegation,
  NavegationContent,
  BtnAdd,
  BtnActive,
  BtnInactive,
  BtnNavegation,
  PanelList,
  Panel,
  PanelHeader,
  PanelBody,
} from './styles';

export default function Section() {
  return (
    <>
      <ToolbarMenu />

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

              <BtnActive onClick={() => {}}>Ativar</BtnActive>
              <BtnInactive onClick={() => {}}>Inativar</BtnInactive>
            </PanelBody>
          </Panel>
        </PanelList>

        <BtnAdd>
          <FaPlus size={32} />
        </BtnAdd>
      </Container>
    </>
  );
}
