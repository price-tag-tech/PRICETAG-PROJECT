import { useState } from 'react';
import { Link } from 'react-router-dom';
import StoreSample from '../../../../assets/images/StoreSample.png';
import FollowCursor from '../../Components/FollowCursor/FollowCursor'; 

const StartStoreSec = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [entryPos, setEntryPos] = useState({ x: 0, y: 0 });
  const [showSpan, setShowSpan] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setEntryPos({ x: mouseX, y: mouseY });
    setCursorPos({ x: mouseX, y: mouseY });
    setShowSpan(true);
  };

  const handleMouseLeave = () => {
    setShowSpan(false);
  };

  return (
    <div className="GenFitSec StartStoreSec">
      <div className="custom-container">
        <div className="Topl-Gen-Head">
          <div className="Topl-Gen-Head-Part">
            <h3 className="big-text">
              Open Your Store. Sell to the World.
            </h3>
          </div>
        </div>

      </div>

      <Link
        to="/open-store"
        className="oop-Sttaf-BbanerSec"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          position: 'relative', 
          cursor: showSpan ? 'none' : 'default',
          textDecoration: 'none'
        }}
      >
        <div className='Animm-Bans'>
          <span>Draft</span>
          <div className='Animm-Bans-Main'></div>
        </div>
        <img src={StoreSample} className="sample-Banner" />
        
        <FollowCursor
          cursorPos={cursorPos}
          entryPos={entryPos}
          showSpan={showSpan}
          text="Open a Store"
        />
      </Link>

    </div>
  );
};

export default StartStoreSec;