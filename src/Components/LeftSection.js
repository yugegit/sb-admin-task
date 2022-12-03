import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
  return <>
  <div>
  {/* <!-- Sidebar --> */}
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            
            <li class="nav-item active">
            <Link to='/dashboard'>
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
              </Link>      
                    
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
              <Link to='/flex'>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Flex</span>
                </a>
                </Link>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li class="nav-item">
              <Link to = '/login'>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Login</span>
                </a>
                </Link>
            </li>

           

            

           

          
            

        </ul>
        {/* <!-- End of Sidebar --> */}
  </div>
  </>

     
}

export default SideBar