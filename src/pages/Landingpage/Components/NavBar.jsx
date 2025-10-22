import { Link } from 'react-router-dom';

// Outline Heroicons
import { HomeIcon, UserIcon, BellIcon } from '@heroicons/react/24/outline';

// Solid Heroicons (renamed to avoid conflict)
import { HomeIcon as HomeSolid, UserIcon as UserSolid, BellIcon as BellSolid } from '@heroicons/react/24/solid';

// Tabler Icons
import { IconSettings, IconMessage, IconSearch } from '@tabler/icons-react';


const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <div className='Iconss'>

      <span className="icon-group">
        {/* Outline icons */}
        <HomeIcon className="icon" />
        <UserIcon className="icon" />
        <BellIcon className="icon" />

        {/* Solid icons */}
        <HomeSolid className="icon" />
        <UserSolid className="icon" />
        <BellSolid className="icon" />

        {/* Tabler icons */}
        <IconSettings className="icon" />
        <IconMessage className="icon" />
        <IconSearch className="icon" />
      </span>
      </div>
    </div>
  );
};

export default NavBar;
