import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../features/dataSlice';

const AskAge = (props) => {
  const { name } = useSelector((store) => store.data);
  const initialAge = 18;
  const maxAge = 30;
  const [selectAge, setSelectAge] = useState(initialAge);
  const dispatch = useDispatch();
  const ageOptions = [];
  for (let age = initialAge; age <= maxAge; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }
  const handleAgeChange = (event) => {
    setSelectAge(event.target.value);
  };

  const submitAge = () => {
    dispatch(setData({ name: name, age: selectAge }));
    props.actions.exitmsg();
  };

  return (
    <div>
      <select
        id='age'
        name='age'
        value={selectAge}
        onChange={handleAgeChange}
        className='age-selector'
      >
        {ageOptions}
      </select>
      <button className='btn' onClick={() => submitAge()}>
        submit
      </button>
    </div>
  );
};

export default AskAge;
