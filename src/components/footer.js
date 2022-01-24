import { Link } from 'react-scroll'


const Footer = () => {
    require('./footer.css');

    return (
        <div className="footerContainer">
            <div className="gridContainerFooter">
                <div className='leftSpace'>

                </div>
                <div className='midSpace'>
                    <div className="footerGrid">
                        <div className="col1">
                            <div className="fHead">
                                EPOCH
                            </div>
                            <div className="fLinks">
                                <Link to='about'>About</Link>
                                <Link to='project'>Projects</Link>
                                <Link to='contact'>Contact</Link>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="fHead">
                                Reference links
                            </div>
                            <div className="fLinks">
                                <a href='https://github.com/code-simp' target="_blank">Github</a>
                                <a href='https://www.linkedin.com/in/K-Tarun/' target="_blank">LinkedIn</a>
                                <a href='https://www.behance.net/ep_och' target="_blank">Behance</a>
                                <a href='https://open.spotify.com/artist/5VToRbwhnQd4YTD3ziuw4m?si=vy3AiBYETtOpPjmoV5v-2A' target="_blank">Spotify</a>
                            </div>
                        </div>
                        <div className="col3">
                            <div className="fHead">
                                Blog Posts
                            </div>
                            <div className="fLinks">
                                <a href='https://github.com/code-simp' target="_blank">Post 1</a>
                                <a href='https://www.linkedin.com/in/K-Tarun/' target="_blank">Post 2</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightSpace'>

                </div>
            </div>
        </div>
    );
}

export default Footer;