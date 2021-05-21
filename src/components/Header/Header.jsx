import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { deleteToken } from '../../authentication/token';

const Header = () => {
  const history = useHistory();

  const logout = () => {
    deleteToken();
    history.push('/');
  }

  return (
    <Wrapper>
      <LogoutButton onClick={logout}>
        Logout
      </LogoutButton>
    </Wrapper>
  )
};

const Wrapper = styled.header`
  background-color: #dcdcdc;
  display: flex;
  justify-content: flex-end;
  padding: 16px 32px;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
`;

export default Header;
