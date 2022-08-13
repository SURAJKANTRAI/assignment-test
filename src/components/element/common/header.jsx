import React from "react";
import {MdSearch,MdSettings,MdSupportAgent} from "react-icons/md"
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './headerStyle.css';
import { OEI } from "../../../pages";



const Headers = () => {
    return(
      <Navbar bg="primary" variant="dark" className="nav-header">
        <Container>
            <div className="nav-row">
           
                    <Navbar.Brand href="/">ACME</Navbar.Brand>
                        <div className="nav-list">
                            <ul>
                                <li><a href="/Insights">Insights</a></li>
                                <li><a href="/oei">OEI</a></li>
                                <li><a href="/Rosi">RoSI</a></li>
                                <li><a href="Risk">Risk</a></li>
                            </ul>
                        </div>
                        <div className="nav-list listing-nav">
                            <ul>
                                <li><a href=""><MdSearch className="icons" /> </a></li>
                                <li><a href=""><MdSettings className="icons" /></a></li>
                                <li><a href=""><MdSupportAgent className="icons" style={{marginRight:"5px"}}/> Conatct us</a></li>
                            
                            </ul>
                        </div>
                        <Dropdown className="my-dropdown">
                            <Dropdown.Toggle className="btnprofile" id="dropdown-basic">
                                CSO Sigifredo Hemandedz
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                
                            </Dropdown.Menu>
                        </Dropdown>
            </div>
        </Container>
      </Navbar>   
    );
}

export default Headers