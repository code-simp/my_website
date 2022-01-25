import { useState } from 'react';

const Contact = () => {
    require('./contact.css');

    const submitUser = (event) => {
        event.preventDefault();
        const body = {
            name: name,
            email: email
        }

        fetch('http://localhost:8000/contact', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(body)
        }).then(response => response.json()).then(data => console.log(data))

        setFlag(true);

    }

    var [name, setName] = useState('')
    var [email, setEmail] = useState('')
    var [flag, setFlag] = useState(false)

    return (
        <div className="contactContainer" id='contact'>
            <div className="gridContainerAbout">
                <div className="about1">
                    <div className="about">
                        CONTACT
                    </div>
                </div>
                <div className="contact2">
                    <div className="cHeading">
                        LET'S TALK<br /><br />
                    </div>

                    <form onSubmit={submitUser}>
                        <label htmlFor="userName">
                            Name
                        </label><br />
                        <input type="text" name='userName' placeholder='Your full name'
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <br /><br />
                        <label htmlFor="userEmail">
                            Email
                        </label><br />
                        <input type="email" name='userEmail' placeholder='Your email'
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        <br /><br />
                        <div className="formText">
                            Do not worry, your data is safe , ig
                        </div>
                        <br /><br />
                        <div className="cButton"><button type='submit'>
                            DONE
                        </button></div>
                        <br /><br />
                        {
                            flag && <div className="formText2">
                                Success, your data is now mine
                            </div>
                        }
                    </form>

                </div>

                <div className="about3">

                </div>
            </div>
        </div>
    );
}

export default Contact;