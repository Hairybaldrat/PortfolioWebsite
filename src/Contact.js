import './Contact.css';
export default function Contact() {
    return (<div className="Section" id="Contact">
        <div className="Contactbox">
            <h1 className="Title"> Contact me </h1>
        <form action="" method="get">
            <div className="formitems">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" required />
                    <label for="email">Email: </label>
                    <input type="text" name="email" id="email" required />
                    <label for="message">Message: </label>
                    <input type="text" name="message" id="message" required />
            </div>
            </form>
        </div>
    </div>);
}