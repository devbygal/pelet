import './styles/Exercise.css';
import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";

export const Exercise = () => {

    let navigate = useNavigate();
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <div>
            <header className='headingCourse p-4'>
            <Link to="#" onClick={() => navigate(-1)}
            style={{
              background: '#000000',
              padding: '4px 24px',
              fontSize: 20,
              borderRadius: '0.33rem'
            }}>
        <RiIcons.RiArrowRightSLine /> חזור</Link>
            <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                <NavDropdown title="תכונות" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">תרגיל מס' 1</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">תרגיל מס' 2</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">תרגיל מס' 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="כותרות" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">תרגיל מס' 1</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">תרגיל מס' 2</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">תרגיל מס' 3</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="פסקאות" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">תרגיל מס' 1</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">תרגיל מס' 2</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">תרגיל מס' 3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </header>
            
        </div>
    );
}