import React from 'react'

function DefaultLayout(props) {
  return (
    <div className='layout'>

      <div className="header">   
        <div>
          <h1 className="logo">Expense Tracker</h1>
        </div>
      </div>

      <div className='content'>
        {props.children}
    </div>
  )
}

export default DefaultLayout