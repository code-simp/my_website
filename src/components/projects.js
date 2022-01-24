import pic3 from '../images/projects_pic1.png';
import pic4 from '../images/projects_pic2.png';
import pic5 from '../images/projects_pic3.png';
import logo1 from '../images/airway.png';
import logo2 from '../images/metromo.png';

const Projects = () => {
    require("./projects.css");

    return (
        <div className="projectsContainer" id='project'>
            <div className="gridContainer">
                <div className="gridItem1">
                    <div className="tarun">
                        PROJECTS
                    </div>
                </div>
                <div className="ProjgridItem2">
                    <div className="projStickyDiv1">
                        <img src={pic3} alt="pic3" />
                    </div>
                </div>
                <div className="ProjgridItem3">

                    <div className="projFlexContainer">
                        <div className="box1">
                            <div className="box1Flex">
                                <div className="Plogo">
                                    <img src={logo1} alt="airwayLogo" />
                                </div>
                                <div className="Pdesc">
                                    A project that ease <br /> booking flights
                                </div>
                                <div className="Pbutton1">
                                    <a href="https://github.com/Project-Airway" target="_blank">
                                        <button>
                                            View Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="box2Flex">
                                <div className="Plogo">
                                    <img src={logo2} alt="airwayLogo" />
                                </div>
                                <div className="Pdesc2">
                                    A project that can potentially <br /> provide better user experience <br /> to daily metro users
                                </div>
                                <div className="Pbutton2">
                                    <a href="https://github.com/code-simp/project_metromo" target="_blank">
                                        <button>
                                            View Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="ProjgridItem4">

                    <div className="projStickyDiv2">
                        <img src={pic4} alt="pic4" />
                    </div>

                </div>
                <div className="ProjgridItem5">
                    <img src={pic5} alt="pic5" />
                </div>
            </div>
        </div>
    );
}

export default Projects
    ;