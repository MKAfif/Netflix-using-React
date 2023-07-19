import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
  
    <div className='navbar'>
      <img className='logo' src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png" alt=""/>
      <input type='text'  placeholder='Search here' className='search'></input>
      <i class="fas fa-search icon"></i>
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""/>
      {/* <i class="fas fa-user-circle avatar"></i> */}

      
    </div>

  )
}

export default Navbar
