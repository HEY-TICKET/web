'use client';

import { HTMLAttributes } from 'react';

import { FieldValues, Path, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import Chip from 'components/common/Chip/Chip';
import * as ChipStyles from 'components/common/Chip/Chip.styles';
import STYLES from 'styles/index';
import { CommonItem } from 'types/common';

interface ChipSelectBoxProps<T extends FieldValues> extends HTMLAttributes<HTMLElement> {
  name: Path<T>;
  title: string;
  description: string;
  list: CommonItem<string>[];
}

const ChipSelectBox = <T extends FieldValues>({
  name,
  title,
  description,
  list,
  ...restProps
}: ChipSelectBoxProps<T>) => {
  const methods = useFormContext<T>();
  const { register } = methods;

  return (
    <Wrapper {...restProps}>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
      <ChipsContainer>
        {list.map(({ caption, value }, index) => (
          <Label key={index}>
            <Input type="checkbox" value={value} {...register(name)} />
            {<Chip text={caption} />}
          </Label>
        ))}
      </ChipsContainer>
    </Wrapper>
  );
};

export default ChipSelectBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const Title = styled.span`
  color: ${STYLES.color.gray900};

  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
const Description = styled.p`
  color: ${STYLES.color.gray500};

  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const ChipsContainer = styled.div`
  display: flex;
  justify-content: center;

  column-gap: 10px;
  row-gap: 12px;
  flex-wrap: wrap;
`;

const Label = styled.label`
  & > input:checked ~ ${ChipStyles.ChipWrapper} {
    background: ${STYLES.color.gray850};
    ${ChipStyles.Chip} {
      color: ${STYLES.color.white};
    }
  }
`;

const Input = styled.input`
  display: none;
`;
