import './eventsidebar.css';
import Calendar from 'react-calendar'

function Eventsidebar() {
    return (
        <div>
            <div>
                <div className="sidebarmaindiv mt-5 mx-3">
                    <div className="p-2">
                        <div>
                            <a href="./eventmain" className="upcominglink">Upcoming</a>
                            <a href="./eventmain" className="pastlink">Past</a>
                        </div>
                        <div className="mt-3">
                            <input type="checkbox" />
                            <label className="mx-3">Attending</label><br />
                            <input type="checkbox" />
                            <label className="mx-3">From group you’ve joined</label><br />
                            <input type="checkbox" />
                            <label className="mx-3">Saved</label><br />
                            <input type="checkbox" />
                            <label className="mx-3">Suggested</label>
                        </div>  
                        <Calendar className="my-5" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Eventsidebar;