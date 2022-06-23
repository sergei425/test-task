import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasksFetchFilterAction } from '../../store/api-action';
import "./menu.css";

function Menu() {
  const [sotrName, setSortName] = useState('');
  const sortValues = ['Sort by username', 'Sort by email', 'Sort by status',];

  const listSortValue = sortValues.map((value) => <li key={value} onClick={() => handleValue(value)} className={sotrName === value ? 'sort__button sort__button--active' : 'sort__button'}  tabIndex={0}>{value}</li>);

  const dispatch = useDispatch();

  const getFilter = (filter) => {
    dispatch(tasksFetchFilterAction(filter.slice(filter.lastIndexOf(' ') + 1)));
  };

  const handleValue = (value) => {
    getFilter(value);
    setSortName(value);
  };


  return (
    <div className="sort">
      <ul className="sort_field">
        {listSortValue}
      </ul>
    </div>
  );
}

export default Menu;
