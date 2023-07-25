import jsonData from '../data.json';
import React from 'react';

class Example2 extends React.Component {
    constructor() {
        super();
        this.state = {
            skills : jsonData.Skills
        }
    } render () {
        return (
            <div>
             {this.state.skills.map(item => (
                <>
                    <h4>{item.Area}</h4>

                    <ul>
                    {item.SkillSet.map(skill =>
                        <li>{skill.Name}</li>
                        )}
                    </ul>
                </>
             ))}
            </div>
        )
    }
}

export default Example2;