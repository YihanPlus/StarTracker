import React, {Component} from 'react';
import spacex_logo from '../assets/images/spacex_logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                {/*<img src={earth} className="App-small-logo" alt="small-logo" />*/}
                <img src={spacex_logo} className="App-logo" alt="logo" />
                <div className="title">
                    StarLink Tracker
                </div>
            </header>
        )
    }
}
export default Header;