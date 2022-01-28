import React, { useState } from 'react';
import RegisterPage from './Register';
function RegisterLayout() {
  const [role, setRole] = useState("Choose");
  const [set, superset] = useState(false);
  const toggle = () => {
    superset(!set);
  };
  const modleHandler = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <div class={!set ? "modal is-active" : "modal"}>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Select Your Role</p>
          </header>
          <section class="modal-card-body">
            <div className="is-flex is-justify-content-center">
              <div class="select" value={role} onChange={modleHandler}>
                <select>
                  <option selected>Choose</option>
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" onClick={toggle}>
              Done
            </button>{" "}
          </footer>
        </div>
      </div>
      <RegisterPage />
    </>
  );
}
export default RegisterLayout;
