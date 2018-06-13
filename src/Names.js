import React from 'react';
//import './Names.css';
import GetName from './GetName';

class Names extends React.Component {
    render() {
        return (
            <section>
                <GetName value="uzername"/>
            </section>
        );
    }
}

export default Names;
