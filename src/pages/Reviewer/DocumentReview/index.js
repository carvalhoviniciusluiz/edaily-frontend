import React from 'react';

import { MdClose } from 'react-icons/md';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PageFullscreen from '~/components/PageFullscreen';

import { Header } from './styles';

import 'react-tabs/style/react-tabs.css';

export default function DocumentReview({ ...res }) {
  const { open, setOpen } = res;

  if (!open) {
    return null;
  }

  return (
    <PageFullscreen
      open={open}
      setOpen={setOpen}
      background="#f8f8f8"
      showActions={false}
    >
      <Tabs>
        <Header>
          <TabList>
            <Tab>Documento</Tab>
            <Tab>Páginas</Tab>
            <Tab>Texto</Tab>
          </TabList>

          <button type="button" onClick={() => setOpen(false)}>
            <MdClose size={22} />
          </button>
        </Header>

        <TabPanel>
          <h2>Documento</h2>
        </TabPanel>

        <TabPanel>
          <h2>Páginas</h2>
        </TabPanel>

        <TabPanel>
          <h2>Texto</h2>
        </TabPanel>
      </Tabs>
    </PageFullscreen>
  );
}
