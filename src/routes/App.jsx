import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import SendEmail from '@pages/SendEmail';
import NotFound from '@pages/NotFound';
import MyAccount from '@pages/MyAccount';
import NewPassword from '@pages/NewPassword';
import '@styles/global.css';
import CreateAccount from '@pages/CreateAccount';
import Login from '@pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/account" element={<MyAccount/>} />
          <Route exact path="signup" element={<CreateAccount/>} />
          <Route exact path="/recovery-password" element={<SendEmail />} />
          <Route exact path="/new-password" element={<NewPassword/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;