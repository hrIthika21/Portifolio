import "./App.css";
import WeatherWebsite from './assets/Weather_website.jpg';
import MusicWebsite from './assets/music_website.jpg';
import TicTacToe from './assets/tic_tac_toe.jpg';
import ExpenseTracker from './assets/expense_tracker.jpg';


const MyProject= () => {
    return ( 
        <div id="projects">
            <h1 className="project_title" style={{textTransform:"uppercase",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>projects</h1>
            <span className="line"></span>
            <div className="all-cards">
                <div className="project-card-1">
                    <h1 className="project-title">MUSIC WEBSITE</h1>
                    <div className="project-card-1-part-2">
                        <a href="https://github.com/hrIthika21/hrIthika21.github.io.git"><img src={MusicWebsite} alt="project-1" className="project-1" /></a>
                        <p >An music website created to appeal the viewers but it does not play any songs.</p>
                        <div className="button">
                            <a href="https://github.com/hrIthika21/hrIthika21.github.io.git"><button className="github">GITHUB</button></a>
                            <a href="https://hrithika21.github.io/musiclib.html"><button className="live-link">HOSTED LINK</button></a>
                    </div>
                    </div>
                </div>
                <div className="project-card-2">
                    <h1 className="project-title">TIC-TAC-TOE</h1>
                    <div className="project-card-2-part-2">
                        <a href="https://github.com/hrIthika21/tic-tac-toe-game.git"><img src={TicTacToe} alt="project-2" className="project-2" /></a>
                        <p>Play TIC-TAC-TOE with your friends and track your winning streak.</p>
                        <div className="button">
                            <a href="https://github.com/hrIthika21/tic-tac-toe-game.git"><button className="github">GITHUB</button></a>
                            <a href=" https://hrithika21.github.io/tic-tac-toe-game/tic_tac_toe.html"><button className="live-link">HOSTED LINK</button></a>
                        </div>
                    </div>
                </div>
                <div className="project-card-3">
                    <h1 className="project-title">EXPENSE TRACKER</h1>
                    <div className="project-card-3-part-2">
                        <a href="https://github.com/hrIthika21/Expense_tracker.git"><img src={ExpenseTracker} alt="project-3" className="project-3"/></a>
                        <p> Add, delete, modify and calculate the expense using this website.</p>
                        <div className="button">
                            <a href="https://github.com/hrIthika21/Expense_tracker.git"><button className="github">GITHUB</button></a>
                            <a href="https://lively-starburst-fc7c88.netlify.app/#expenses_list"><button className="live-link">HOSTED LINK</button></a>
                        </div>
                    </div>
                </div>
                <div className="project-card-4">
                    <h1 className="project-title">WEATHER WEBSITE</h1>
                    <div className="project-card-4-part-2">
                        <a href="https://github.com/hrIthika21/Weather_app.git"><img src={WeatherWebsite} alt="project-4" className="project-4" /></a>
                        <p>Displays current weather condition,forecast for next 24 hours and 5 days.</p>
                        <div className="button">
                            <a href="https://github.com/hrIthika21/Weather_app.git"><button className="github">GITHUB</button></a>
                            <button className="live-link">HOSTED LINK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default MyProject;
