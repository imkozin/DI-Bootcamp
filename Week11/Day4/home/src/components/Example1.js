import jsonData from '../data.json';
import React from 'react';

class Example1 extends React.Component {
    constructor() {
        super()
        this.state = {
            social: jsonData.SocialMedias
        }
    }
    render () {
        return (
            <div>
                <ul>
                    {this.state.social.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Example1;