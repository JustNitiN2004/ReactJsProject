import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
      
    return (
      
<div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: 280,height:577}}>
    <span  class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      
      <span class="fs-2">Tasks  </span>
    </span>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">

     
    <Link class="dropdown-item  " to="/inputField"> InputField </Link> 
    <Link class="dropdown-item" to="/counter"> Counter </Link> 
    <Link class="dropdown-item" to="/basicSum"> BasicSum </Link> 
    <Link class="dropdown-item" to="/stopWatch"> StopWatch </Link> 
    <Link class="dropdown-item" to="/ctrLocalStorage"> CtrLocalStorage </Link> 
    <Link class="dropdown-item" to="/grabValue"> GrabValue </Link> 
    <Link class="dropdown-item" to="/form"> Form </Link> 
    <Link class="dropdown-item" to="/nameCalling"> NameCalling </Link> 
    <Link class="dropdown-item" to="/counterHook"> CounterHook </Link> 
    <Link class="dropdown-item" to="/todo"> Todo </Link> 
    <Link class="dropdown-item" to="/conditionalRendering"> ConditionalRendering </Link> 
    <Link class="dropdown-item" to="/products"> Products </Link> 
    <Link class="dropdown-item" to="/newsApi"> NewsApi </Link> 
    

 
    </ul>
    <hr />
    <div class="dropdown">
         
         
       
       
    </div>
  </div>
         
    )
}

export default Sidebar
