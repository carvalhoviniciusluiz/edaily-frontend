import React, { useState } from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Bedge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Bedge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Bedge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lido</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
