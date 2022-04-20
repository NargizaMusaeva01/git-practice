import React from 'react'
import  './LoginForm.css'

function LoginForm() {
  return (
    <div className='container'>
       <h1>Member login</h1>
      <form>
          <label>Email address</label><br />
          <input className='inp1' type="email" placeholder='Enter email' />
      </form>
      <form>
          <label>Password</label>
          <br />
          <input type="password"  placeholder='password'
           />
           <br />
           <input  type="checkbox" />
           <span>Remember me</span>
           <br />
          <button>LOGIN</button>
      </form>

       </div>
  )
}

export default LoginForm;