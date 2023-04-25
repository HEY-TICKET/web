import { STATUS } from 'constants/perform/status';
import CheckboxList from 'deprecated/components/common/List/CheckboxList';

type Props = {
  name: string;
};

const Status = ({ name }: Props) => {
  const statusList = Object.values(STATUS);

  return <CheckboxList list={statusList} name={name} />;
};

export default Status;
