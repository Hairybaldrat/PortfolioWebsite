import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import './Nav.css'
import Button from "react-bootstrap/Button"

export default function Navbar() {
  const [sections, setSections] = useState([]);

    //Will currently freak out if resolution is changed in debug mode, seems to be fine if browser changes size.
    useEffect(() => {
        if (document.getElementsByClassName('Content')?.[0] != null) {
            const sectionElements = document.getElementsByClassName('Content')[0].getElementsByClassName('Section');
            const sectionArray = Array.from(sectionElements);
            setSections(sectionArray);
            const navBar = document.getElementsByClassName("Navbarbox")[0];
            document.addEventListener('mousemove', mouseMoveHandler);
            var windowX;
            var windowX2;
            if (window.screen.availWidth < 800) {
                windowX = window.screen.availWidth * 0.1;
                windowX2 = window.screen.availWidth * 0.5;
            }
            else {
                windowX = window.screen.availWidth * 0.10;
                windowX2 = window.screen.availWidth * 0.20;
            }
            function mouseMoveHandler(e) {
                e = e || window.event;
                const mouseX = e.pageX;
                if (mouseX <= windowX) {
                    if (window.screen.availWidth < 800) {
                        navBar.style.width = "50%";
                    }
                    else {
                        navBar.style.width = "15%";
                    }
                }
                else if (mouseX >= windowX2) {
                    navBar.style.width = "0px";
                }
            }
        } else {
            console.log("No content element.")
        }

    }, []);

    function clickbutton(section) {
        section.scrollIntoView();

  }
  console.log(sections)

    return (
        <div>
            <div className="Navbarbox">
                <Link to="/">
                    <div className="homeElements">
                        <img className="homeButt" src="House.png" alt="Homebutton" />
                        <p className="homeText">Home</p>
                    </div>
                </Link>
        {sections.length > 0 ?
            sections.map((section, index) =>
            {
                return (<div key={index}>
                    <Button className="redirbutt" variant="light" onClick={() => clickbutton(section)} >
                        <div className="butttext">{section.id != null ? section.id : "No tag"}</div>
                    </Button>
                </div>)
            })
            : console.log("No nav elements.")
        }
            </div>
            <div className="hoverbox">
                <Button variant="dark" className="hoverbutt">
                    <h2 className="hoverindic"> Explore</h2>
                </Button>
            </div>
        </div>);
}