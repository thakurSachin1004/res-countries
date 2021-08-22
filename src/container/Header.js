import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleTheme, theme }) => {
  return (
    <StyledNav theme={theme}>
      <StyledList>
        <li>
          <div>Where in the world?</div>
        </li>
        <li>
          <div onClick={toggleTheme}>
            <StyledIcon icon={faMoon} />
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </div>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default Header;

const StyledNav = styled.nav`
  padding: 8px 80px;
  background: ${(props) =>
    props.theme === 'light'
      ? 'hsl(0, 0%, 100%)'
      : ' hsl(209, 23%, 22%)'};
  box-shadow: 0 2px 2px rgb(0 0 0 / 0.1);

  @media (max-width: 475px) {
    padding: 10px 10px;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-right: 6px;
  padding-left: 0;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
