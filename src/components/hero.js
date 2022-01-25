import pic1 from '../images/hero_bg_1.png'
import pic2 from '../images/hero_bg_2.png'
// import { slide as Menu } from 'react-burger-menu'

const Hero = () => {
    require("./hero.css");
    return (
        <div className="heroContainer" id='hero'>
            <div className="hero-mobile-only">
                <div className="hero-text-mob">
                    TARUN
                </div>
            </div>
            <div className="gridContainer">
                <div className="gridItem1">
                    <div className="tarun">
                        TARUN
                    </div>
                </div>
                <div className="gridItem2">
                    <div className="img1">
                        <img src={pic1} alt="pic1" />
                    </div>
                    <div className="my">
                        MY
                    </div>
                </div>
                <div className="gridItem3">
                    <div className="epoch">
                        EPOCH
                    </div>
                </div>
                <div className="gridItem4">
                    <div className="img2">
                        <img src={pic2} alt="pic2" />
                    </div>
                </div>
                <div className="gridItem5">
                    {/* <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="/">Settings</a>
                </Menu> */}
                </div>
            </div>
        </div>
    );
}

export default Hero;

// #to create vertical line
// <span className="vertical-line"></span>