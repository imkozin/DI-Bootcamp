import { useState } from "react";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        age: "",
        gender: "",
        destination: "",
        nuts: false,
        vegan: false,
        lactose: false
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({...formData, [name] : value});
    };

    return (
        <div>
            <h1>Sample Form</h1>
            <form action="/" method="GET">
                <input onChange={(e)=>handleChange(e)} name="fname" placeholder="First name"/> <br/>
                <input onChange={(e)=>handleChange(e)} name="lname" placeholder="Last name"/> <br/>
                <input onChange={(e)=>handleChange(e)} name="age" placeholder="Age"/> <br/>
                <input onChange={(e)=>handleChange(e)} type="radio" value="male" name="gender" />  Male <br/>
                <input onChange={(e)=>handleChange(e)} type="radio" value="female" name="gender" /> Female <br/>
                <h3>Select Your Destination:</h3>
                <select onChange={(e)=>handleChange(e)} name="destination">
                    <option>Choose your destination</option>
                    <option value="Japan">Japan</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Brazil">Brazil</option>
                </select>
                <h3>Dietary Restrictions:</h3>
                <input onChange={(e)=>handleChange(e)} type="checkbox" name="nuts"/> Nuts free <br/>
                <input onChange={(e)=>handleChange(e)} type="checkbox" name="vegan"/> Vegan <br/>
                <input onChange={(e)=>handleChange(e)} type="checkbox" name="lactose"/> Lactose free <br/>
                <input type="submit" value="Submit" />
            </form>
        
            <h1>Entered information</h1>
            <p>Your name: {formData.fname} {formData.lname} </p>
            <p>Your age: {formData.age} </p>
            <p>Your gender: {formData.gender} </p>
            <p>Your destination: {formData.destination}</p>
            <p>Your dietary restrictions: <br/>
                **Nuts free : {formData.nuts ? "Yes" : "No"} <br/>
                **Vegan : {formData.vegan ? "Yes" : "No"}<br/>
                **Lactose free : {formData.lactose ? "Yes" : "No"}
            </p>
        </div>
    )
}

export default FormComponent;