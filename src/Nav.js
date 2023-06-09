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
            window.addEventListener('resize', handleResize);
            document.addEventListener('mousemove', mouseMoveHandler);
            const navBar = document.getElementsByClassName("Navbarbox")[0];
            var windowX;
            var windowX2;
            const widths = setWindowX();
            windowX = widths[0];
            windowX2 = widths[1];
            console.log(windowX);
            console.log(windowX2)
            function handleResize() {
                const widths = setWindowX();
                windowX = widths[0];
                windowX2 = widths[1];

            }
            function mouseMoveHandler(e) {
                e = e || window.event;
                const mouseX = e.pageX;
                if (mouseX <= windowX) {
                    openNav();
                }
                else if (mouseX >= windowX2) {
                    navBar.style.width = "0px";
                }
            }

        } else {
            console.log("No content element.")
        }

    }, []);

    function openNav() {
        const navBar = document.getElementsByClassName("Navbarbox")[0];
        if (window.innerWidth < 800) {
            navBar.style.width = "70%";
        }
        else {
            navBar.style.width = "15%";
        }
    }


    function setWindowX() {
        var windowX;
        var windowX2;
        if (window.innerWidth < 1200) {
            windowX = window.innerWidth * 0.2;
            windowX2 = window.innerWidth * 0.65;
        }
        else {
            windowX = window.innerWidth * 0.10;
            windowX2 = window.innerWidth * 0.20;
        }
        console.log(windowX)
        console.log(windowX2)
        return [windowX, windowX2]
    }


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
            <div className="hoverbox" >
                <Button variant="dark" className="hoverbutt" >
                    <h2 className="hoverindic" onClick={()=> openNav()}> Navigation</h2>
                </Button>
            </div>
        </div>);
}