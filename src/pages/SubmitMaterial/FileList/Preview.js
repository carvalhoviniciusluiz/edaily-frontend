import React, { useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import PropTypes from 'prop-types';

import { Preview } from './styles';

export default function PdfPreview({ file }) {
  const canvasEl = useRef(null);

  const [loading] = usePdf({
    file,
    page: 1,
    canvasEl,
  });

  return (
    <>
      {loading && <span>carregando...</span>}
      <Preview ref={canvasEl} />
    </>
  );
}

PdfPreview.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  file: PropTypes.any.isRequired,
};
