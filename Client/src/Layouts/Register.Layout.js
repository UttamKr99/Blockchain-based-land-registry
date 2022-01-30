import React, { useState } from 'react'
import RegisterPage from './Register'
function RegisterLayout() {
  const [role, setRole] = useState('')
  const [set, superset] = useState(false)
  const toggle = () => {
    if (role !== '') superset(!set)
  }
  const modelHandler = (e) => {
    setRole(e.target.value)
  }

  return (
    <>
      <div className={!set ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Select Your Role</p>
          </header>
          <section className="modal-card-body">
            <div classNameName="is-flex is-justify-content-center">
              <div className="select">
                <select value={role} onChange={modelHandler}>
                  <option disabled default value>
                    Choose
                  </option>
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={toggle}>
              Done
            </button>
          </footer>
        </div>
      </div>
      <RegisterPage user={role} />
    </>
  )
}
export default RegisterLayout
