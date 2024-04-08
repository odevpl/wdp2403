import React from 'react';
import styles from './LoginPage.module.scss';
import Button from '../../common/Button/Button';

const LoginPage = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.loginWrapper}>
          <form>
            <div className={styles.login}>
              <label htmlFor='login'>Email</label>
              <input type='email' id='login' name='login'></input>
            </div>
            <div className={styles.password}>
              <label htmlFor='password'>Hasło</label>
              <input type='passwor' id='password' name='password'></input>
            </div>
            <div className={styles.remember}>
              <p>Nie pamiętasz hasła?</p>
              <a href='#'>Przypomnij hasło</a>
            </div>
            <Button href='/'>Zaloguj się</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
