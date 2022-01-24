
const About = () => {
    require("./about.css");

    return (

        <div className="aboutContainer" id="about">
            <div className="gridContainerAbout">
                <div className="about1">
                    <div className="about">
                        ABOUT
                    </div>
                </div>
                <div className="about2">
                    <div className="aHeading">
                        Pssh... Hey there<br /><br />
                    </div>
                    <span>
                        Let’s keep it between us.. need ?
                        <ul>
                            <li>Web and mobile development</li>
                            <li>Web and mobile app designs</li>
                            <li>music mixing and mastering or</li>
                            <li>just chill around ?</li>
                        </ul>
                        here’s my secret contact mail - <br />
                        <div className="email1">itanupad@gmail.com</div>
                        or let’s get in touch <br /><br />
                    </span>

                    <button>
                        Let's talk
                    </button>

                </div>

                <div className="about3">
                    
                </div>
            </div>
        </div>
    );
}

export default About;