import "./App.css";

const MyProject= () => {
    return ( 
        <div id="projects">
            <h1 className="project_title" style={{textTransform:"uppercase",display:"flex",justifyContent:"center",alignItems:"center"}}>projects</h1>
            <span className="line"></span>
            <div className="all-cards">
                <div className="project-card-1">
                    <h1 className="project-title">MUSIC WEBSITE</h1>
                    <div className="project-card-1-part-2">
                        <a href="https://github.com/hrIthika21/hrIthika21.github.io.git"><img src="https://colorlib.com/wp/wp-content/uploads/sites/2/solmusic-free-template-353x278.jpg" alt="project-1" className="project-1" /></a>
                        <p >An music website created to appeal the viewers but it does not play any songs.Click the image to get source code</p>
                    </div>
                </div>
                <div className="project-card-2">
                    <h1 className="project-title">TIC-TAC-TOE</h1>
                    <div className="project-card-2-part-2">
                        <a href="https://github.com/hrIthika21/tic-tac-toe-game.git"><img src="https://www.researchgate.net/publication/345020113/figure/fig1/AS:952405189484545@1604082500261/a-Example-game-winning-in-Tic-Tac-Toe-when-player-O-claims-3-tiles-in-a-diagonal-b.ppm" alt="project-2" className="project-2" /></a>
                        <p>Play TIC-TAC-TOE with your friends and track your winning streak.Click the image to get source code</p>
                    </div>
                </div>
                <div className="project-card-3">
                    <h1 className="project-title">EXPENSE TRACKER</h1>
                    <div className="project-card-3-part-2">
                        <a href="https://github.com/hrIthika21/Expense_tracker.git"><img src="https://www.zohowebstatic.com/sites/zweb/images/creator/app-deck/expense-tracking-management-software-ss1.png" alt="project-3" className="project-3"/></a>
                        <p> Add, delete, modify and calculate the expense using this website.Click the image to get source code</p>
                    </div>
                </div>
                <div className="project-card-4">
                    <h1 className="project-title">WEATHER WEBSITE</h1>
                    <div className="project-card-4-part-2">
                        <a href="https://github.com/hrIthika21/Weather_app.git"><img src="https://webdamn.com/wp-content/uploads/2019/11/build-weather-website-with-php-min.png" alt="project-4" className="project-4" /></a>
                        <p>Displays current weather condition,forecast for next 24 hours and 5 days.Click the image to get source code</p>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default MyProject;
