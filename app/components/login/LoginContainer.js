import React, { useState } from 'react';
import LoginForm from './LoginForm'
import axios from "axios";
import { api } from "../../services/apiRoutes";
import { useAuth } from '../../hooks/useAuth'

const LoginContainer = () => {
  const { signIn } = useAuth()
  const [login, setLogin] = useState({ username: '', password: '' })

  const loginHandler = (e) => {
    const { name, value } = e.target
    setLogin({
      ...login,
      [name]: value
    })
  }
  async function handleSubmit() {
    try {
      const response = await axios({ url: api.getUser, method: 'GET' });
      if (response && response.status === 200) {
        signIn(response.data)
      }
    } catch (error) {
      console.error(error);
    }

  }

  return <LoginForm
    login={login}
    loginHandler={loginHandler}
    handleSubmit={handleSubmit} />
};

export default LoginContainer;