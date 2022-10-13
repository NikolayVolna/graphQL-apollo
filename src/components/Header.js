import React from 'react';
import { Link as RouterLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <RouterLink to="/" className="no-underline black">
          <div className="fw7 mr1">Hacker News</div>
        </RouterLink>        
        <RouterLink to="/" className="ml1 no-underline black">
          new
        </RouterLink>
        <div className="ml1">|</div>
        <RouterLink
          to="/create"
          className="ml1 no-underline black"
        >
          submit
        </RouterLink>
      </div>
    </div>
  );
};

export default Header;