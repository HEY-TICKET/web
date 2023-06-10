import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import ListItem from 'components/common/List/ListItem';
import STYLES from 'styles/index';

/**
 * isAllValue: true => 첫번째 값과 다른 값들을 동시에 선택할 수 없습니다.
 */
interface ListProps {
  list: { caption: string; value: string }[];
  name?: string;
  type?: 'checkbox' | 'radio';
  setIsDirty?: Dispatch<SetStateAction<boolean>>;
  isAllValue?: boolean;
}

const List = ({ list, name, type = 'checkbox', setIsDirty, isAllValue = false }: ListProps) => {
  const initValue = list[0].value;
  const [selected, setSelected] = useState([initValue]);
  const useHook = !!name;
  const { register, setValue, getValues } = useFormContext();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (useHook) {
      await register(name).onChange(e);
      if (isAllValue) {
        if (type === 'checkbox') {
          if (value === initValue) {
            setValue(name, [value], { shouldDirty: true });
          } else {
            const prevValues = getValues(name);

            if (prevValues.length === 0) {
              setValue(name, [initValue], { shouldDirty: true });
            } else if (prevValues.includes(initValue)) {
              setValue(
                name,
                prevValues.filter((item: string) => item !== initValue),
                { shouldDirty: true },
              );
            }
          }
        }
        setIsDirty?.(true);
      }
    } else {
      if (checked) setSelected((prev) => [...prev, value]);
      else setSelected((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <Container>
      {list.map(({ caption, value }) => (
        <Item key={value}>
          <ListItem
            type={type}
            value={value}
            text={caption}
            {...(useHook && {
              ...register(name),
              onChange: handleChange,
            })}
            {...(!useHook && {
              checked: selected.includes(value),
              onChange: handleChange,
            })}
          />
        </Item>
      ))}
    </Container>
  );
};

export default List;

const Container = styled.ul`
  padding: 0 20px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 56px;

  padding: 18px 2px;

  border-bottom: 1px solid ${STYLES.color.gray200};

  &:hover {
    background-color: ${STYLES.color.gray100};
  }
`;
