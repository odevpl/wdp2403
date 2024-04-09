import React from 'react';
import styles from './LoginPage.module.scss';
import Button from '../../common/Button/Button';

const LoginPage = () => {
  return (
    <div className={styles.root}>
      <div className='container d-flex justify-content-center'>
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
              <Button href='#'>Przypomnij hasło.</Button>
            </div>
            <div className={styles.button}>
              <Button variant='main' type='submit' href='/'>
                Zaloguj się
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
