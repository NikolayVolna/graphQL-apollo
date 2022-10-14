import React from 'react';
import { Link as RouterLink,useNavigate} from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <RouterLink to="/" className="no-underline black">
          <div className="fw7 mr1">Hacker News</div>
        </RouterLink>        
        <RouterLink to="/" className="ml1 no-underline black">
          all Links
        </RouterLink>
        <div className="ml1">|</div>
        <RouterLink
          to="/top"
          className="ml1 no-underline black">
            top
          </RouterLink>
          <div className="ml1">|</div>
        <RouterLink
          to="/search"
          className="ml1 no-underline black"
        >
          search
        </RouterLink>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <RouterLink
              to="/create"
              className="ml1 no-underline black"
            >
              submit
            </RouterLink>
          </div>
        )}
      </div>

      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate('/');
            }}
          >
            logout
          </div>
        ) : (
          <RouterLink
            to="/login"
            className="ml1 no-underline black"
          >
            login
          </RouterLink>
        )}
      </div>
    </div>
  );
};

export default Header;