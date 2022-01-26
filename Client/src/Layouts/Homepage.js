import '../assets/Css/Layouts/Homepage.css';
function Homepage() {
  return (
    <>
      <div className='bgimg'>
        <div className='container'>
          <div className='columns is-flex is-justify-content-center is-align-content-center'>
            <div className='content column is-6 mx-auto'>
              <h1 className='is-size-1 is-captalize has-text-white has-text-weight-bold'>
                Blockchain Based Land Registry System!
              </h1>
              <p className='is-size-5'>
                Sell your property in a new way with 100% secure System.
              </p>

              <button class='button is-success is-medium'>Register</button>
              <button class='button is-success is-light is-medium ml-4'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;
