import CheckboxList from 'components/common/List/CheckboxList';
import { STATUS } from 'constants/perform/status';

type Props = {
  name: string;
};

const Status = ({ name }: Props) => {
  const statusList = Object.values(STATUS);

  return <CheckboxList list={statusList} name={name} />;
};

export default Status;
