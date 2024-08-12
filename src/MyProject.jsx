import "./App.css";

const MyProject= () => {
    return ( 
        <div id="projects">
            <h1 className="title" style={{textTransform:"uppercase",display:"flex",justifyContent:"center",alignItems:"center"}}>My recent contributions</h1>
            <div className="all-cards">
                <div className="project-card-1">
                    <h1 className="project-title">MUSIC WEBSITE</h1>
                    <div className="project-card-1-part-2">
                        <img src="src/assets/Screenshot 2024-08-10 at 12.06.44 PM.jpg" alt="project-1" className="project-1" />
                        <div className="project-button">
                            <button for="model1">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="project-card-2">
                    <h1 className="project-title">TIC-TAC-TOE</h1>
                    <div className="project-card-2-part-2">
                        <img src="src/assets/Screenshot 2024-08-10 at 12.10.05 PM.jpg" alt="project-2" className="project-2" />
                        <div className="project-button">
                            <button for="model2">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="project-card-3">
                    <h1 className="project-title">EXPENSE TRACKER</h1>
                    <div className="project-card-3-part-2">
                        <img src="src/assets/Screenshot 2024-08-10 at 12.11.43 PM.jpg" alt="project-3" className="project-3" />
                        <div className="project-button">
                            <button for="model3">Know More</button>
                        </div>
                    </div>
                </div>
                <div className="project-card-4">
                    <h1 className="project-title">WEATHER WEBSITE</h1>
                    <div className="project-card-4-part-2">
                        <img src="src/assets/Weather_website.jpg" alt="project-4" className="project-4" />
                        <div className="project-button">
                            <button for="model4">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default MyProject;