const Contact = () => {
    require('./contact.css');

    return ( 
        <div className="contactContainer">
            <div className="gridContainerAbout">
                <div className="about1">
                    <div className="about">
                        CONTACT
                    </div>
                </div>
                <div className="about2">
                    <div className="cHeading">
                        LET'S TALK<br /><br />
                    </div>
                    
                    <form action="">
                        <label htmlFor="userName">
                            Name
                        </label><br />
                        <input type="text" name='userName' placeholder='Your full name'/>
                        <br /><br />
                        <label htmlFor="userEmail">
                            Email
                        </label><br />
                        <input type="email" name='userEmail' placeholder='Your email'/>

                        <br /><br />
                        <div className="formText">
                        Do not worry, your data is safe , ig
                        </div>
                        <br /><br />
                        <div className="cButton"><button>
                            DONE
                        </button></div>
                        
                    </form>

                </div>

                <div className="about3">
                    
                </div>
            </div>
        </div>
     );
}
 
export default Contact;