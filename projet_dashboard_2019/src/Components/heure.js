import React, { Component } from 'react';
import Clock from 'react-live-clock';
 
class Heure extends React.Component {
    render() {
        return (
            <div>
                <h2>Heure</h2>
                <br></br><br></br>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'FR'} />
        </div>
        );
    }
}

export default Heure;