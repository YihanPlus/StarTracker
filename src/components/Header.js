import React, {Component} from 'react';
import spacex_logo from '../assets/images/spacex_logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="title">
                    StarLink Tracker
                </div>
                <img src={spacex_logo} className="App-logo" alt="logo" />
            </header>
        )
    }
}
export default Header;