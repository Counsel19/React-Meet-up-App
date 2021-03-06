import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'

function MainNavigattion (){
    return (
      <header className= {classes.header}>
        <div className={classes.logo}> React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/"> All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">Add New Meetup</Link>
            </li>
            <li>
              <Link to="/favourites">My Favourites</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainNavigattion; 