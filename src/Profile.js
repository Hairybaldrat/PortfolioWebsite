import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div className="Section" id="About me">
        <div className="Profilebox">
            <img className="Profilepicture" src="https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png" alt="Rowan Olive" />
            <div>
            <h1 id="Title">About me</h1>
                    <p>My name is Rowan and I am an aspiring junior software developer.
                        I mainly have experience in C#, Javascript (React).
                        I also have experience with backend such as SQL and Jade.
                        I have experience in deploying full stack cloud applications.</p>
            </div>
            </div >
        </div>
    )
}