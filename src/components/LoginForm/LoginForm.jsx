import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { setToken, isLoggedIn } from '../../authentication/token';
import LOGIN from '../../graphql/mutations/login'
import Input from '../Input/Input';

const LoginForm = () => {
  const userLoggedIn = isLoggedIn();
  const [email, setEmail] = useState('fan@starwars.com');
  const [password, setPassword] = useState('sw123');
  const history = useHistory();
  const [login] = useMutation(LOGIN);

  if (userLoggedIn) {
    history.push('/characters');
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: {
          email,
          password
        }
      });

      setToken(data.login.token);
      history.push('/characters');
    } catch (error) {
      // Handle error 
    }
  };

  return (
    <Wrapper>
      <FormWrapper
        onSubmit={submit}
      >
        <Title>WELCOME</Title>
        <InputWrapper>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Password</Label>
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="text"
          />
        </InputWrapper>
        <SubmitButton type="submit">LOGIN</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.form`
    width: 500px;
    padding: 32px;
    border-radius: 8px;
`;

const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.div`
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  margin-bottom: 24px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #8ed8fc;
  border-radius: 4px;
  height: 32px;
  cursor: pointer;
  letter-spacing: 4px;
  font-weight: bold;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
`;

export default LoginForm;
