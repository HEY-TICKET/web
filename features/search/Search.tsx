'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Chip from 'components/common/Chip/Chip';
import Input from 'components/Input/Input';
import { CardListItem, DUMMY_PERFORMANCES } from 'constants/cardData';
import SearchContents from 'features/search/SearchContents';
import useOutsideClick from 'hooks/useOutsideClick';
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

  const [isSearching, setIsSearching] = useState(true);
  const [data, setData] = useState<CardListItem[]>([]);

  const methods = useForm({ mode: 'onTouched', defaultValues: { search: '' } });
  const { trigger } = methods;

  const clearSearches = () => {
    localStorage.setItem(KEY, JSON.stringify([]));
    setSearchesList([]);
  };

  const {
    Popup,
    open: openPopup,
    isOpen,
  } = usePopup({
    title: '최근 검색어를 모두 삭제하시겠어요?',
    submitText: '삭제',
    onSubmit: () => {
      clearSearches();
      setEditMode(false);
      setIsSearching(true);
    },
  });

  const inputWrapperRef = useOutsideClick<HTMLDivElement>({
    outsideClick: () => !isOpen && setIsSearching(false),
    insideClick: () => !isOpen && setIsSearching(true),
  });

  const clickChip = () => {
    //
  };

  const onValidSubmit: SubmitHandler<FormValue> = ({ search }) => {
    const value = search.trim();

    if (!value) return;

    if (!searchesList.includes(value)) {
      const item = [value, ...searchesList];
      if (item.length > 10) item.pop();
      localStorage.setItem(KEY, JSON.stringify(item));
      setSearchesList(item);
    }

    setData(DUMMY_PERFORMANCES);
    setIsSearching(false);
  };

  const deleteKeyword = async (keyword: string) => {
    console.log('delete keyword');
    const item = searchesList.filter((search) => search !== keyword);
    localStorage.setItem(KEY, JSON.stringify(item));
    setSearchesList(item);
    await trigger('search', { shouldFocus: true });
  };

  useEffect(() => {
    const searches = localStorage.getItem('searches');
    if (searches && Array.isArray(JSON.parse(searches))) setSearchesList(JSON.parse(searches));
  }, []);

  return (
    <Styles.Container>
      <Styles.StickyBox ref={inputWrapperRef}>
        <Styles.InputWrapper>
          <Styles.BackIconWrapper onClick={() => back()}>
            <ArrowRight size={32} />
          </Styles.BackIconWrapper>

          <FormProvider {...methods}>
            <Input<FormValue>
              name={'search'}
              onValid={onValidSubmit}
              placeholder={'공연명, 출연진, 아티스트 검색'}
              hasIcon
              onFocus={() => setIsSearching(true)}
            />
          </FormProvider>
        </Styles.InputWrapper>
        {isSearching && !!searchesList.length && (
          <Styles.RecentSearchesWrapper>
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
            <Styles.SearchesChips>
              {searchesList.map((search, i) => (
                <Chip
                  key={search + i}
                  text={search}
                  onClick={clickChip}
                  onClose={() => deleteKeyword(search)}
                />
              ))}
            </Styles.SearchesChips>
          </Styles.RecentSearchesWrapper>
        )}
      </Styles.StickyBox>
      <SearchContents visible={!isSearching && !!data.length} data={data} />
      <Popup />
    </Styles.Container>
  );
};

export default Search;
