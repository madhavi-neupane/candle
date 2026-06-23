import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Link } from 'react-router-dom'
import Birthday from './users/Birthday'
import Wisher from './users/Wisher'
import Stressed from './users/Stressed'

function UserSelector() {
  return (
    <div>
     <h1>select the users</h1>
     <div className="users"> 
      <div className="section">
        <div className="user-section">
         
          < Wisher />
          <Stressed />

        </div>
      </div>
     </div>


<div className="testing-area">

         <BrowserRouter>
         
            <Link to="/Birthday"> Birthdayyyyyyy </Link>

            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/Birthday" element={ <Birthday />}/>
            </Routes>
            </BrowserRouter>
            
</div>

    </div>
  )
}

export default UserSelector
  