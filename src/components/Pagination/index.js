import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Navigation, NavigationContent, BtnNavigation } from './styles';

export default function Pagination(params) {
  const { page, setPage, meta, inputValue, setInputValue } = params;

  const [desablePrev, setDesablePrev] = useState(true);
  const [desableNext, setDesableNext] = useState(false);

  const handleChangeInputValue = e => {
    setInputValue(e.target.value);
  };

  const handleFetchPage = e => {
    if (!e.target.value) {
      setInputValue(page);
      return;
    }
    setPage(e.target.value);
  };

  function handlePrevPage() {
    const newPage = page - 1;
    if (newPage === meta.lastPage) return;

    setPage(newPage);
    setDesablePrev(newPage === 1);
    setDesableNext(newPage === meta.lastPage);
  }

  function handleNextPage() {
    const newPage = page + 1;
    if (newPage > meta.lastPage) {
      setDesableNext(true);
      return;
    }

    setPage(newPage);
    setDesablePrev(desableNext);
    setDesableNext(newPage === meta.lastPage);
  }

  return (
    <Navigation>
      <BtnNavigation onClick={handlePrevPage} desable={desablePrev}>
        <MdChevronLeft size={36} color="#fff" />
      </BtnNavigation>

      <NavigationContent>
        <input
          type="text"
          value={inputValue}
          onChange={handleChangeInputValue}
          onBlur={handleFetchPage}
        />
        <strong>/</strong>
        <strong>{meta.lastPage}</strong>
      </NavigationContent>

      <BtnNavigation onClick={handleNextPage} desable={desableNext}>
        <MdChevronRight size={36} color="#fff" />
      </BtnNavigation>
    </Navigation>
  );
}
