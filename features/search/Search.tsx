'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import Chip from 'components/common/Chip/Chip';
import Input from 'components/Input/Input';
import usePopup from 'hooks/usePopup';
import { ArrowRight } from 'styles/icons';

import * as Styles from './Search.styles';

type FormValue = {
  search: string;
};

// TODO : 키 관리 필요.
const KEY = 'searches';

const Search = () => {
  const { back } = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [searchesList, setSearchesList] = useState<string[]>([]);

  const { Popup, open } = usePopup({
    title: '최근 검색어를 모두 삭제하시겠어요?',
    submitText: '삭제',
    onSubmit: () => {
      localStorage.setItem(KEY, JSON.stringify([]));
      setSearchesList([]);
    },
  });

  const submit = ({ search }: FormValue) => {
    const value = search.trim();
    if (!value || searchesList.includes(value)) return;

    const item = [value, ...searchesList];
    if (item.length > 10) item.pop();
    localStorage.setItem(KEY, JSON.stringify(item));
    setSearchesList(item);
  };

  const deleteAllKeyword = () => {
    open();
  };

  const deleteKeyword = (keyword: string) => {
    console.log('delete keyword');
    const item = searchesList.filter((search) => search !== keyword);
    localStorage.setItem(KEY, JSON.stringify(item));
    setSearchesList(item);
  };

  useEffect(() => {
    const searches = localStorage.getItem('searches');
    if (searches && Array.isArray(JSON.parse(searches))) setSearchesList(JSON.parse(searches));
  }, []);

  return (
    <>
      <Styles.Wrapper>
        <Styles.InputWrapper>
          <Styles.BackIconWrapper onClick={() => back()}>
            <ArrowRight size={32} />
          </Styles.BackIconWrapper>
          <Input<FormValue>
            name={'search'}
            onSubmit={submit}
            defaultValues={{ search: '' }}
            placeholder={'공연명, 출연진, 아티스트 검색'}
            hasIcon
            autoFocus
          />
        </Styles.InputWrapper>
        <Styles.RecentSearchesWrapper>
          <Styles.SearchesTitle>
            <span>최근 검색어</span>
            {!!searchesList.length && (
              <div>
                {editMode ? (
                  <>
                    <span onClick={deleteAllKeyword}>전체 삭제</span>
                    <span onClick={() => setEditMode(false)}>취소</span>
                  </>
                ) : (
                  <span onClick={() => setEditMode(true)}>편집</span>
                )}
              </div>
            )}
          </Styles.SearchesTitle>
          <Styles.SearchesChips>
            {searchesList.map((search, i) => (
              <Chip key={search + i} text={search} onClose={() => deleteKeyword(search)} />
            ))}
          </Styles.SearchesChips>
        </Styles.RecentSearchesWrapper>
      </Styles.Wrapper>
      <Popup />
    </>
  );
};

export default Search;
