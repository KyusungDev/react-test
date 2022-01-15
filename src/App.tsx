import React, { useContext } from 'react';
import Header from './components/Layout/Header';
import Login from './components/Login/Login';
import './App.css';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);

  return (
    <div className='App'>
      <Header />
      <main>
        {authCtx.isLoggedIn && (
          <section>
            로그인!
            <div>
              <button onClick={authCtx.logout}>로그아웃</button>
            </div>
          </section>
        )}
        {!authCtx.isLoggedIn && <Login />}
      </main>
    </div>
  );
}

export default App;
