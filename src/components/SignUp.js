import React from 'react';

class SignUp extends React.Component {
  render() {
    return (
      <div className='container-landing'>
          <h6 className='type3'>Sign up for early access</h6>
        <form>
          <input className='input-form' placeholder='hola@fylo.com' type='email' />
          <button className='button-type1'>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp;