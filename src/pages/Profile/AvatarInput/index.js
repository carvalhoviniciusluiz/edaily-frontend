import React, { useState, useRef, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import Identicon from 'react-identicons';
import { useSelector } from 'react-redux';

import { Input, useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container, FileContainer, LabelIcon, FileInput } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const profile = useSelector(state => state.user.profile);

  const [newAvatar, setNewAvatar] = useState(false);
  const [file, setFile] = useState(defaultValue && defaultValue.uuid);
  const [preview, setPreview] = useState(defaultValue && defaultValue.avatar);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_uuid',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('avatars', data);

    const { uuid, avatar } = response.data;

    setFile(uuid);
    setPreview(avatar);

    setNewAvatar(true);
  }

  return (
    <Container>
      <Input type="hidden" name="newAvatar" value={newAvatar} />

      <FileContainer>
        {preview ? (
          <img src={preview} alt="Avatar" />
        ) : (
          <Identicon
            string={`${profile.firstname} ${profile.lastname}`}
            size={120}
            bg="#fff"
            fg="#333"
          />
        )}

        <LabelIcon>
          <FaCamera color="#fff" size={20} />
        </LabelIcon>

        <FileInput data-file={file} onChange={handleChange} ref={ref} />
      </FileContainer>
    </Container>
  );
}
