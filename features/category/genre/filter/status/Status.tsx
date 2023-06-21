import CheckboxList from 'components/common/List/CheckboxList';
import { STATUS_LIST_MAP } from 'constants/performance/common';
import { StatusTypes } from 'types/performance';

type Props = {
  name: string;
};

const Status = ({ name }: Props) => {
  return <CheckboxList<StatusTypes> list={STATUS_LIST_MAP} name={name} />;
};

export default Status;
