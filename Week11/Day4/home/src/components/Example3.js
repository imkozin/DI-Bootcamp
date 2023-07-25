import jsonData from '../data.json';
import React from 'react';

class Example3 extends React.Component {
    constructor() {
        super();
        this.state = {
            experience : jsonData.Experiences
        }
    } render () {
        return (
            <div>
            {this.state.experience.map(item => (
                <>
                    <img src={item.logo} alt="logo"/> 
                    <a href={item.url}>{item.companyName}</a>
                    {item.roles.map(el => (
                        <>
                            <h5>{el.title}</h5>
                            <p>{el.startDate} {el.location}</p>
                            <p>{el.description}</p>
                        </>
                    ))}
                </>
            ))}
            </div>
        )
    }
}

export default Example3;