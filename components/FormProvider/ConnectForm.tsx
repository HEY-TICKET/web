import { ReactElement } from 'react';

import { FieldValues, useFormContext, UseFormReturn } from 'react-hook-form';

interface ConnectFormProps<FormValues extends FieldValues = FieldValues> {
  children: (methods: UseFormReturn<FormValues>) => ReactElement;
}

/**
 * @summary form context를 주입하기 위한 고차 컴포넌트입니다.
 */
const ConnectForm = <FormValues extends FieldValues = FieldValues>({
  children,
}: ConnectFormProps<FormValues>): ReactElement => {
  const methods = useFormContext<FormValues>();

  return children({ ...methods });
};

export default ConnectForm;
