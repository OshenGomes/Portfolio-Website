import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    // const theme = useContext(ThemeContext);
    // const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pu7kgt6",
                "template_fmm5hkh",
                formRef.current,
                "aifeV8NbS9A8mtI04"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);

                },
                (error) => {
                    console.log(error.text);
                }
            );

    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's talk</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +94 71 5282784
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFlbfsWJkqflVdPmdgwzHqTCsRPQdHnxhsdFwNstpSQzrdSXPkNcStjbNcKNwpJFpWSNB">Oshengomes@gmail.com</a>
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Kekanadura, Matara, Southern province, Sri lanka
                        </div>
                        <a href="https://www.linkedin.com/in/oshengomes/"> <button className="button button1"><i className="fa fa-linkedin"></i> Linkedin</button></a>
                        <a href="https://github.com/OshenGomes"><button className="button button2"><i className="fa fa-github"></i> Github</button></a>
                        <a href="https://www.instagram.com/o_m_gomes/"><button className="button button3"><i className="fa fa-instagram"></i> Instagram</button></a>
                        <a href="https://www.facebook.com/oshan.gomez"><button className="button button4"><i className="fa fa-facebook"></i> Facebook</button></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFlbfsWJkqflVdPmdgwzHqTCsRPQdHnxhsdFwNstpSQzrdSXPkNcStjbNcKNwpJFpWSNB"><button className="button button5"><i className="fa fa-envelope"></i> Email</button></a>
                    </div>
                </div>
                <div className="c-right">
                    <h2 className="c-desc">
                        leave a message
                    </h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input  type="text" placeholder="Name" name="user_name" onfocus="this.value=''" required />
                        <input type="text" placeholder="Subject" name="user_subject" onfocus="this.value=''" required/>
                        <input  type="text" placeholder="Email" name="user_email" onfocus="this.value=''" required />
                        <textarea rows="5" placeholder="Message" name="message" onfocus="this.value=''" required/>
                        <button>Submit</button>
                        <br/>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;