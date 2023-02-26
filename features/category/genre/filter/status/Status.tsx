import CheckboxList from 'components/common/List/CheckboxList';
import { STATUS } from 'constants/perform/status';

const Status = () => {
  const statusList = Object.values(STATUS);

  return (
    <div>
      <CheckboxList list={statusList} />
    </div>
  );
};

export default Status;
