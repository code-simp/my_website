import pic3 from '../images/projects_pic1.png';
import pic4 from '../images/projects_pic2.png';
import pic5 from '../images/projects_pic3.png';

const Projects = () => {
    require("./projects.css");

    return ( 
        <div className="projectsContainer">
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