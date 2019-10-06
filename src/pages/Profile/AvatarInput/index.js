import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useField } from '@rocketseat/unform';
import Identicon from 'react-identicons';

import { FaCamera } from 'react-icons/fa';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const profile = useSelector(state => state.user.profile);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

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

    const { uuid, url } = response.data;

    setFile(uuid);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <Identicon
            string={`${profile.firstname} ${profile.lastname}`}
            size={120}
            bg="#fff"
            fg="#333"
          />
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />

        <div className="fieldInput">
          <FaCamera color="#fff" size={20} />
        </div>
      </label>
    </Container>
  );
}
