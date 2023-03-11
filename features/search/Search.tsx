'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Input from 'components/Input/Input';
import { CardListItem, DUMMY_PERFORMANCES } from 'constants/cardData';
import { ROUTES } from 'constants/routes';
import * as Styles from 'features/search/Search.styles';
import SearchContents from 'features/search/SearchContents';
import SearchHistory from 'features/search/SearchHistory';
import { ArrowRight } from 'styles/icons';

export type SearchFormValue = {
  search: string;
};

// TODO : 키 관리 필요.

const Search = () => {
  const { back, push } = useRouter();

  const [showSearchHistory, setShowSearchHistory] = useState(true);

  // FIXME : api 작업 가능하게 되면 react-query로 data 관리
  const [data, setData] = useState<CardListItem[]>([]);

  const methods = useForm({ mode: 'onTouched', defaultValues: { search: '' } });
  const { handleSubmit } = methods;

  const clickBackButton = () => {
    back();
  };

  const onValidSubmit: SubmitHandler<SearchFormValue> = ({ search }) => {
    // addSearches(search);
    push(`${ROUTES.search}?keyword=${search}`);

    if (search === '공연') setData(DUMMY_PERFORMANCES);

    // FIXME : 검색을 하거나, ESC를 누르거나(?) (KREAM은 취소 버튼이 있음)
    setShowSearchHistory(false);
  };

  return (
    <Styles.Container>
      <FormProvider {...methods}>
        <Styles.Form id={'search-input-form'} onSubmit={handleSubmit(onValidSubmit)}>
          <Styles.StickyBox>
            <Styles.InputWrapper>
              <Styles.BackIconWrapper onClick={clickBackButton}>
                <ArrowRight size={32} />
              </Styles.BackIconWrapper>

              <Input<SearchFormValue>
                name={'search'}
                placeholder={'공연명, 출연진, 아티스트 검색'}
                hasIcon
                autoBlur
                onFocus={() => setShowSearchHistory(true)}
              />
            </Styles.InputWrapper>
          </Styles.StickyBox>
          {showSearchHistory ? <SearchHistory /> : <SearchContents data={data} />}
        </Styles.Form>
      </FormProvider>
    </Styles.Container>
  );
};

export default Search;
