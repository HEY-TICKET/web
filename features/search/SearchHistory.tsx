'use client';

import { useEffect, useRef, useState } from 'react';

import { useFormContext } from 'react-hook-form';

import Chip from 'components/common/Chip/Chip';
import { SearchFormValue } from 'features/search/Search';
import * as Styles from 'features/search/Search.styles';
import usePopup from 'hooks/usePopup';

// TODO : 키 관리 필요.
const KEY = 'searches';

const SearchHistory = () => {
  const {
    setValue,
    getValues,
    formState: { isSubmitting },
  } = useFormContext<SearchFormValue>();

  const [editMode, setEditMode] = useState(false);
  const [searchesList, setSearchesList] = useState<string[]>([]);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const clearSearches = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify([]));
      setSearchesList([]);
    } catch (e) {
      console.log('localstorage setItem error', e);
    }
  };

  const deleteSearchKeyword = async (keyword: string) => {
    try {
      const item = searchesList.filter((search) => search !== keyword);
      localStorage.setItem(KEY, JSON.stringify(item));
      setSearchesList(item);
    } catch (e) {
      console.log('localstorage setItem error', e);
    }
  };

  const { Popup, open: openPopup } = usePopup({
    title: '최근 검색어를 모두 삭제하시겠어요?',
    submitText: '삭제',
    onSubmit: () => {
      clearSearches();
      setEditMode(false);
    },
  });

  const clickChip = (search: string) => {
    setValue('search', search);
    buttonRef.current?.click();
  };

  useEffect(() => {
    try {
      if (isSubmitting) {
        const value = getValues('search');

        const item = [value, ...searchesList.filter((item) => item !== value)];
        if (item.length > 10) item.pop();
        localStorage.setItem(KEY, JSON.stringify(item));
        setSearchesList(item);
      }
    } catch (e) {
      console.log('localstorage setItem error', e);
    }
  }, [getValues, isSubmitting, searchesList]);

  /**
   * desc : mount 될 때, localStorage 값 state 에 저장
   */
  useEffect(() => {
    try {
      const searches = localStorage.getItem('searches');
      if (searches && Array.isArray(JSON.parse(searches))) setSearchesList(JSON.parse(searches));
    } catch (e) {
      console.log('localstorage getItem error', e);
    }
  }, []);

  return (
    <Styles.RecentSearchesWrapper>
      {!!searchesList.length && (
        <Styles.SearchesTitle>
          <span>최근 검색어</span>
          <div>
            {editMode ? (
              <>
                <span onClick={openPopup}>전체 삭제</span>
                <span onClick={() => setEditMode(false)}>취소</span>
              </>
            ) : (
              <span onClick={() => setEditMode(true)}>편집</span>
            )}
          </div>
        </Styles.SearchesTitle>
      )}
      <Styles.SearchesChips>
        {searchesList.map((search, i) => (
          <Chip
            key={search + i}
            text={search}
            onClick={() => clickChip(search)}
            onClose={() => deleteSearchKeyword(search)}
            closable={editMode}
          />
        ))}
      </Styles.SearchesChips>
      <Popup />
      <button ref={buttonRef} type={'submit'}></button>
    </Styles.RecentSearchesWrapper>
  );
};

export default SearchHistory;
