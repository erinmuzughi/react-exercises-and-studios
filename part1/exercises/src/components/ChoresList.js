import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
      <h3 className = {classes.choresHeading}>Today's Chores</h3>
      <ul>
         <li className={classes.choresText}>Laundry</li>
         <li className={classes.choresText}>Clean Kitchen</li>
         <li className={classes.choresText}>Pickup more formula</li>
         <li className={classes.choresText}>Plan weekend</li>
      </ul>
   </div>
   );
}