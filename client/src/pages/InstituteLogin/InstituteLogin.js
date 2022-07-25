import React from 'react'
import './Institute.css'
import {AiOutlineUnlock, AiOutlineMail} from 'react-icons/ai'
const InstituteLogin = () => {
  return (

        <div id="login-page">
        
          <div className="login-icon">
            <img src='https://th.bing.com/th/id/R.98f7ba11c0008416714360d79b38fcc3?rik=2Ejragac6mGlFQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-thin-line-user-icon-2232.png&ehk=xfJZe9qWw%2fORWGP1VnUnQPT3r09SLw4ihK%2fyNms%2b2OA%3d&risl=&pid=ImgRaw&r=0'/>
          </div>
          <h2 className="login-title">Login</h2>
          <p className="notice">Please login to access the system</p>
          <form className="form-login">
            <label for="email">E-mail</label>
            <div className="input-email">
            #666;
              <input type="email" name="email" placeholder="Enter your e-mail" required/>
            </div>
            <label for="password">Password</label>
            <div className="input-password">
           <AiOutlineUnlock className='icon'/>
              <input type="password" name="password" placeholder="Enter your password" required/>
            </div>
           
            <button type="submit"><i className="fas fa-door-open"></i> Sign in</button>
          </form>

          
          
      </div>
   
  )
}

export default InstituteLogin