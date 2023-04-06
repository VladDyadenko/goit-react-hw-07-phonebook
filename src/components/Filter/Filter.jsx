import { useDispatch, useSelector } from 'react-redux';

import { Label, Input } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { filterOnContact } from 'redux/slise';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={e => dispatch(filterOnContact(e.currentTarget.value))}
        ></Input>
      </Label>
    </div>
  );
};

export default Filter;
