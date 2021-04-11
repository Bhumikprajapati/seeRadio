import React,{useState} from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { FaUserCircle,FaFire } from 'react-icons/fa'
import { RiAdvertisementFill} from 'react-icons/ri'
import {IoIosNotifications} from 'react-icons/io'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'; 
import logo from '../../../assets/logo.png'
import {
  NavLink as RouteNavLink
} from "react-router-dom";

const NavigationBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
const logoutHandler=()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('createdByPerson')
  localStorage.removeItem('role')
  localStorage.removeItem('OrderData')
  localStorage.removeItem('clientData')
  localStorage.removeItem('loginId')
  props.history.push('/login')
}
const activeStyle={backgroundColor:'#086890'}
    return (
        <>
         <Navbar style={{maxHeight:'80px',margin:'0px 15px',padding:'0px',display:'flex',alignItems:'center',
         justifyContent:'center',height:'100px'}} className="text-white" light expand="md">
        
          <Nav className="mr-auto" navbar>
            <NavbarBrand style={{marginTop:'-10px'}}>
              <RouteNavLink to="dashboard"><img src={logo} alt="logo"/></RouteNavLink>
              </NavbarBrand>
            </Nav>
             <UncontrolledDropdown nav >
              <DropdownToggle nav caret className="text-white  p-0 mr-4">
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <IoIosNotifications className="mr-4" color="black" size="25"/>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <FaUserCircle color="blue" size="25"/><FiChevronDown color="black"/></div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} className="ml-2">
                    <p style={{fontSize:'14px'}} className="mb-0 text-primary">See radio administrator</p>
                    <p style={{fontSize:'14px'}} className="mb-0 text-dark">sr@sr.com</p>
                  </div>
                </div>
              </DropdownToggle>
              <DropdownMenu right style={{marginTop:'-30px'}}>
                <NavLink href="" style={{margin:'-5px'}}>
                    <DropdownItem >
                  Profile
                </DropdownItem></NavLink>
                <NavLink href="/changepassword" style={{margin:'-5px'}}>
                    <DropdownItem >
                  Change Password
                </DropdownItem></NavLink>
                <NavLink href="" style={{margin:'-5px'}}>
                    <DropdownItem >
                  Company Details
                </DropdownItem></NavLink>
                <NavLink href='/' style={{margin:'-5px'}} onClick={logoutHandler} >
                    <DropdownItem  style={{color:'red'}} >
                  Sign Out
                </DropdownItem></NavLink>
                </DropdownMenu>
                </UncontrolledDropdown>
          </Navbar>

        <Navbar style={{background:'#11A1DD',padding:'0px',marginBottom:'-35px'}} className="text-white" light expand="md">
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <RouteNavLink activeStyle={activeStyle} to="dashBoard">
              <NavItem>
              <NavLink className="text-white"><AiFillDashboard className="mb-1"/> Dashboard</NavLink>
            </NavItem>
            </RouteNavLink>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white" >
                <FaFire className="mb-1"/> Campaigns
              </DropdownToggle>
              <DropdownMenu >
                <RouteNavLink activeStyle={activeStyle} to="/videosInProduction">
                    <DropdownItem>
                  Videos in Production
                </DropdownItem></RouteNavLink>
                <RouteNavLink activeStyle={activeStyle} to="capmpaignInMarket">
                    <DropdownItem>
                  Campaign in market
                </DropdownItem></RouteNavLink>
                <DropdownItem divider />
                <RouteNavLink activeStyle={activeStyle} to="/completedCampaign">
                    <DropdownItem>
                  Completed Campaigns
                </DropdownItem></RouteNavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            <RouteNavLink activeStyle={activeStyle} to="/advertisers">
              <NavItem>
              <NavLink className="text-white"><RiAdvertisementFill className="mb-1"/> Advertisers</NavLink>
            </NavItem></RouteNavLink>
          </Nav>
          <Nav>
           <RouteNavLink activeStyle={activeStyle} exact to="/order">
             <NavItem className="navbar-right">
              <NavLink className="text-white"><strong>+</strong> Orders</NavLink>
            </NavItem>
            </RouteNavLink>
          </Nav>
          
        </Collapse>
      </Navbar>
      </> 
    )
}




export default NavigationBar
