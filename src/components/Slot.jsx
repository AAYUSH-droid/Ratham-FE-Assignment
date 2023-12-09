import { useState } from 'react';
import '../App.css';
const Slot = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showTiming, setShowTimimg] = useState(false);
  const displayImages = (e) => {
    setDate(e);
    setShowTimimg(true);
  };

  const timingMessage = (time) => {
    setTime(time);
    props.actions.timingMessage({ date, time });
    document.getElementById('time-div').style.display = 'none';
  };
  const getCurrentDate = (daysToAdd = 0) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <div id='time-div'>
      <div>
        <button
          id='date1'
          className='btn'
          onClick={() => displayImages(getCurrentDate())}
        >
          {getCurrentDate()} <br />
        </button>
        <button
          id='date2'
          className='btn'
          onClick={() => displayImages(getCurrentDate())}
        >
          {getCurrentDate(1)}
          <br />
        </button>
        <button
          id='date3'
          className='btn'
          onClick={() => displayImages(getCurrentDate())}
        >
          {getCurrentDate(2)}
          <br />
        </button>
      </div>
      {showTiming ? (
        <div>
          <div className='time-container'>
            <p>Morning</p>
            <button className='btn' onClick={() => timingMessage('09 AM')}>
              {' '}
              09:00
            </button>
            <button className='btn' onClick={() => timingMessage('10 AM')}>
              10:00
            </button>
            <button className='btn' onClick={() => timingMessage('11 AM')}>
              {' '}
              11:00
            </button>
            <button className='btn' onClick={() => timingMessage('12 AM')}>
              {' '}
              12:00
            </button>
          </div>
          <div className='time-container'>
            <p>Noon</p>
            <button className='btn' onClick={() => timingMessage('02 PM')}>
              {' '}
              02:00
            </button>
            <button className='btn' onClick={() => timingMessage('03 PM')}>
              03:00
            </button>
            <button className='btn' onClick={() => timingMessage('04 PM')}>
              {' '}
              04:00
            </button>
            <button className='btn' onClick={() => timingMessage('05 PM')}>
              {' '}
              05:00
            </button>
          </div>
          <div className='time-container'>
            <p>Evening</p>
            <button className='btn' onClick={() => timingMessage('07 PM')}>
              {' '}
              07:00
            </button>
            <button className='btn' onClick={() => timingMessage('08 PM')}>
              08:00
            </button>
            <button className='btn' onClick={() => timingMessage('09 PM')}>
              {' '}
              09:00
            </button>
            <button className='btn' onClick={() => timingMessage('10 PM')}>
              {' '}
              10:00
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Slot;
