import React from 'react';
import styles from './RegisterPage.module.scss';
import clsx from 'clsx';

const RegisterPage = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.registerForm}>
          <form id='form'>
            <div className={styles.loginRegistration}>
              <div className={styles.inputRadio}>
                <input
                  type='radio'
                  id='haveAccount'
                  name='account'
                  value='haveAccount'
                />
                <label htmlFor='haveAccount'>Mam konto</label>
              </div>
              <div className={styles.iunputRadio}>
                <input
                  type='radio'
                  id='haventAccount'
                  name='account'
                  value='haventAccount'
                />
                <label htmlFor='haventAccount'>Nie mam konta</label>
              </div>
            </div>
            <div className={styles.dataAccount}>
              <label htmlFor='account'>Podaj dane do rejestracji</label>
              <input type='email' htmlFor='account' placeholder='E-mail *' required />
              <input type='password' htmlFor='account' placeholder='Hasło *' required />
              <input
                type='password'
                htmlFor='account'
                placeholder='Powtórz hasło *'
                required
              />
              <div className={clsx(styles.sliderSwitch, styles.slider)}>
                <input type='checkbox' id='switch' />
                <label htmlFor='switch'>Toggle</label>
                <p>Pokaż hasło</p>
              </div>
            </div>
            <div className={styles.consents}>
              <div className={styles.consentsInput}>
                <input type='checkbox' name='selectAll' />
                <label htmlFor='selectAll'>Zaznacz wszystkie</label>
              </div>
              <div className={styles.consentsInput}>
                <input type='checkbox' name='acceptRegulations' required />
                <label htmlFor='acceptRegulations'>
                  Akceptuje warunki <a href='#'>regulaminu</a> *
                </label>
              </div>
              <div className={styles.consentsInput}>
                <input type='checkbox' name='marketingConsents' />
                <label htmlFor='marketingConsents'>
                  Tak, tak! Chcę otrzymywać JEŻowy newsletter
                </label>
              </div>
            </div>
            <div className={styles.formNavigation}>
              <a href='#'>&lt; Wróć</a>
              <button type='submit'>
                <a href='/'>Zarejestruj się</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
