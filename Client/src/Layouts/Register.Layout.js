import React, { useState } from 'react';
import RegisterPage from './Register';
function RegisterLayout() {
  const [role, setRole] = useState('');
  const modleHandler = () => {};
  return (
    <>
      <div class='modal'>
        <div class='modal-background'></div>
        <div class='modal-card'>
          <header class='modal-card-head'>
            <p class='modal-card-title'>Select Your Role</p>
          </header>
          <section class='modal-card-body'>
            <div className='is-flex is-justify-content-center'>
              <div class='select'>
                <select>
                  <option>Choose</option>
                  <option value=''>Seller</option>
                  <option value=''>Buyer</option>
                </select>
              </div>
            </div>
          </section>
          <footer class='modal-card-foot'>
            <button class='button is-success' onClick={modleHandler}>
              Done
            </button>
          </footer>
        </div>
      </div>
      <RegisterPage />
    </>
  );
}
export default RegisterLayout;
