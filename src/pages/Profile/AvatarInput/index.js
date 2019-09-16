import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useField } from '@rocketseat/unform';
import Identicon from 'react-identicons';

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
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const formData = new FormData();

    formData.append('file', e.target.files[0]);

    const response = await api.post('files', formData);
    const { uuid, url } = response.data;

    const { data } = await api.get(url, {
      responseType: 'arraybuffer',
    });

    const buffer = Buffer.from(data, 'binary').toString('base64');

    setFile(uuid);
    setPreview(buffer);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={`data:image/png;base64, ${preview}`} alt="" />
        ) : (
          <Identicon string={profile.name} size={120} bg="#fff" fg="#333" />
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
