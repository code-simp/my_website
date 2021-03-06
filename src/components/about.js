import { Link } from 'react-scroll'

const About = () => {
    require("./about.css");

    return (

        <div className="aboutContainer" id="about">


            <div className="about-mob-only">
                <div className="mob-about">
                    ABOUT
                </div>
            </div>
            <div className="gridContainerAbout">
                <div className="about1">
                    <div className="about">
                        ABOUT
                    </div>
                </div>
                <div className="about2">
                    <div className="about2-mob">
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
                        or let’s get in touch <br />
                    </span>
                    <Link to='contact'>
                        <button>
                            Let's talk
                        </button>
                    </Link>

                </div>

                
                </div>
                <div className="about3">

                </div>
            </div>
        </div>
    );
}

export default About;