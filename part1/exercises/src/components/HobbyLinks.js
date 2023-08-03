export default function HobbyLinks () {
        const hobbyLinks = ["https://www.fabulousfox.com/broadway-series/seasonticket-2023", "https://f45training.com/workouts"];
        return (
        <div>
           <h3>My Hobbies</h3>
           <ol>
              <li> <a href = {hobbyLinks[0]}>Live Theater</a></li>
              <li> <a href = {hobbyLinks[1]}>F-45 Training</a></li>
           </ol>
        </div>
        );
    }