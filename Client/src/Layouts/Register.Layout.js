import React, { useState } from 'react';
import RegisterPage from './Register';
import Img from '../assets/Images/Login.jpg';
import '../assets/Css/Layouts/Register.css';
function RegisterLayout() {
     const [role, setRole] = useState('');
     const [setOpen, setClosed] = useState(false);
     const toggle = () => {
          if (role !== '') setClosed(!setOpen);
     };
     const modelHandler = (e) => {
          setRole(e.target.value);
     };

     return (
          <>
               <div className="bgimg">
                    <div className="columns">
                         <div className="column is-7"></div>
                         <div className="column is-5 mr-4">
                              <div class="card">
                                   <header class="card-header">
                                        <p class="card-header-title is-size-3">
                                             Regsiter User
                                        </p>
                                   </header>
                                   <div class="card-content">
                                        <RegisterPage user={role} />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
export default RegisterLayout;
