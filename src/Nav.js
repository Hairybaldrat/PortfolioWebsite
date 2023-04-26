import React, { useEffect, useState } from 'react';
import './Nav.css'

export default function Navbar() {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const sectionElements = document.getElementsByClassName('Content')[0].getElementsByClassName('Section');
        const sectionArray = Array.from(sectionElements);
        setSections(sectionArray);
        const navBar = document.getElementsByClassName("Navbarbox")[0];
        document.addEventListener('mousemove', mouseMoveHandler);
        const windowX = window.screen.availWidth * 0.10;
        const windowX2 = window.screen.availWidth * 0.15;
        function mouseMoveHandler(e) {
            e = e || window.event;
            const mouseX = e.pageX;
            if (mouseX <= windowX) {
                if (window.screen.availWidth < 800) {
                    navBar.style.width = "30%";
                }
                else {
                    navBar.style.width = "15%";
                }
            }
            else if (mouseX >= windowX2) {
                navBar.style.width = "0px";
            }
        }
    }, []);

    function clickbutton(section) {
        section.scrollIntoView();

    }
    return (
        <div className="Container">
        <div className="Navbarbox">
        {sections.length > 0 ?
            sections.map((section, index) =>
            {
                return (<div key={index}>
                    <input type="button" className="redirbutt" onClick={() => clickbutton(section)} value={section.id != null ? section.id : "No tag"}>
                    </input>
                </div>)
            })
            : null
        }
            </div>
            <div className="hoverbox">
                <h3 className="hoverindic">Hover me</h3>
            </div>
        </div>            );
}