import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Bedge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Bedge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Bedge>

      <NotificationList>
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
