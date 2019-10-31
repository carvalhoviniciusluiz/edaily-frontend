import React from 'react';
import PropTypes from 'prop-types';

import {
  MdChevronLeft,
  MdChevronRight,
  MdAccessTime,
  MdPeople,
  MdPerson,
  MdPersonOutline,
  MdMenu,
} from 'react-icons/md';

import PageFullscreen from '~/components/PageFullscreen';

import { Avatar, Navigation, Button, PanelList, Panel } from './styles';

export default function PanelComponent({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  return (
    <PageFullscreen open={open} setOpen={setOpen} background="#f8f8f8">
      <Avatar>
        <img
          src="http://127.0.0.1:3333/avatars/90246adc-ee91-4152-ba72-1a1d8cfa44d6"
          alt="avatar"
        />

        <strong>Vinicius Carvalho</strong>
        <span>carvalho.viniciusluiz@gmail.com</span>
      </Avatar>

      <Navigation>
        <Button>
          <MdChevronLeft size={36} color="#333" />
        </Button>
        <div>
          <input type="text" value={1} />
          <strong>/</strong>
          <strong>2</strong>
        </div>
        <Button>
          <MdChevronRight size={36} color="#333" />
        </Button>
      </Navigation>

      <PanelList>
        <Panel className="with-shading">
          <div>
            <strong className="time">14:23</strong>
            <strong>
              <MdPeople size={22} />
              <span>NIO</span>
            </strong>
            <strong>
              <MdPerson size={22} />
              <span>
                Julia
                <span>Marques</span>
              </span>
            </strong>
            <strong>
              <MdPersonOutline size={22} />
              <span>
                Vinicius
                <span>Carvalho</span>
              </span>
            </strong>
            <strong>
              <MdAccessTime />
              <span>31/10/2019</span>
            </strong>
          </div>

          <div className="actions">
            <p>
              <strong>00045.0000234/2019-43</strong>
              <a href="#viewer" rel="noopener noreferrer">
                EDITAL DE CONCURSO PUBLICA.pdf
              </a>
            </p>

            <a href="#viewer" rel="noopener noreferrer">
              <MdMenu />
              histórico
            </a>
          </div>
        </Panel>
        <Panel className="with-shading">
          <div>
            <strong className="time">14:23</strong>
            <strong>
              <MdPeople size={22} />
              <span>NIO</span>
            </strong>
            <strong>
              <MdPerson size={22} />
              <span>
                Julia
                <span>Marques</span>
              </span>
            </strong>
            <strong>
              <MdPersonOutline size={22} />
              <span>
                Vinicius
                <span>Carvalho</span>
              </span>
            </strong>
            <strong>
              <MdAccessTime />
              <span>31/10/2019</span>
            </strong>
          </div>

          <div className="actions">
            <p>
              <strong>00045.0000234/2019-43</strong>
              <a href="#viewer" rel="noopener noreferrer">
                EDITAL DE CONCURSO PUBLICA.pdf
              </a>
            </p>

            <a href="#viewer" rel="noopener noreferrer">
              <MdMenu />
              histórico
            </a>
          </div>
        </Panel>
        <Panel className="with-shading">
          <div>
            <strong className="time">14:23</strong>
            <strong>
              <MdPeople size={22} />
              <span>NIO</span>
            </strong>
            <strong>
              <MdPerson size={22} />
              <span>
                Julia
                <span>Marques</span>
              </span>
            </strong>
            <strong>
              <MdPersonOutline size={22} />
              <span>
                Vinicius
                <span>Carvalho</span>
              </span>
            </strong>
            <strong>
              <MdAccessTime />
              <span>31/10/2019</span>
            </strong>
          </div>

          <div className="actions">
            <p>
              <strong>00045.0000234/2019-43</strong>
              <a href="#viewer" rel="noopener noreferrer">
                EDITAL DE CONCURSO PUBLICA.pdf
              </a>
            </p>

            <a href="#viewer" rel="noopener noreferrer">
              <MdMenu />
              histórico
            </a>
          </div>
        </Panel>
        <Panel className="with-shading">
          <div>
            <strong className="time">14:23</strong>
            <strong>
              <MdPeople size={22} />
              <span>NIO</span>
            </strong>
            <strong>
              <MdPerson size={22} />
              <span>
                Julia
                <span>Marques</span>
              </span>
            </strong>
            <strong>
              <MdPersonOutline size={22} />
              <span>
                Vinicius
                <span>Carvalho</span>
              </span>
            </strong>
            <strong>
              <MdAccessTime />
              <span>31/10/2019</span>
            </strong>
          </div>

          <div className="actions">
            <p>
              <strong>00045.0000234/2019-43</strong>
              <a href="#viewer" rel="noopener noreferrer">
                EDITAL DE CONCURSO PUBLICA.pdf
              </a>
            </p>

            <a href="#viewer" rel="noopener noreferrer">
              <MdMenu />
              histórico
            </a>
          </div>
        </Panel>
        <Panel className="with-shading">
          <div>
            <strong className="time">14:23</strong>
            <strong>
              <MdPeople size={22} />
              <span>NIO</span>
            </strong>
            <strong>
              <MdPerson size={22} />
              <span>
                Julia
                <span>Marques</span>
              </span>
            </strong>
            <strong>
              <MdPersonOutline size={22} />
              <span>
                Vinicius
                <span>Carvalho</span>
              </span>
            </strong>
            <strong>
              <MdAccessTime />
              <span>31/10/2019</span>
            </strong>
          </div>

          <div className="actions">
            <p>
              <strong>00045.0000234/2019-43</strong>
              <a href="#viewer" rel="noopener noreferrer">
                EDITAL DE CONCURSO PUBLICA.pdf
              </a>
            </p>

            <a href="#viewer" rel="noopener noreferrer">
              <MdMenu />
              histórico
            </a>
          </div>
        </Panel>
        <Panel className="with-shading">
          <div>
            <strong className="time">14:23</strong>
            <strong>
              <MdPeople size={22} />
              <span>NIO</span>
            </strong>
            <strong>
              <MdPerson size={22} />
              <span>
                Julia
                <span>Marques</span>
              </span>
            </strong>
            <strong>
              <MdPersonOutline size={22} />
              <span>
                Vinicius
                <span>Carvalho</span>
              </span>
            </strong>
            <strong>
              <MdAccessTime />
              <span>31/10/2019</span>
            </strong>
          </div>

          <div className="actions">
            <p>
              <strong>00045.0000234/2019-43</strong>
              <a href="#viewer" rel="noopener noreferrer">
                EDITAL DE CONCURSO PUBLICA.pdf
              </a>
            </p>

            <a href="#viewer" rel="noopener noreferrer">
              <MdMenu />
              histórico
            </a>
          </div>
        </Panel>
      </PanelList>
    </PageFullscreen>
  );
}

PanelComponent.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
