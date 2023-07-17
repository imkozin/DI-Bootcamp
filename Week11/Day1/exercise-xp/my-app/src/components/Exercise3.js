const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const list = {drinks: ['Coffee', 'Tea', 'Milk']}

const Exercise = (p) => {
    return (
        <div>
            <h1 className="red" style={style_header}>This is a Header</h1>
            <p className="para">This is paragraph</p>
            <a href="#">This is a link</a>
            <h3>This a Form</h3>
            <form>
                <label>Enter your name:
                </label><br />
                <input type="text" />
                <button>Submit</button>
            </form>
            <h4>Here is an Image:</h4>
            <img src="https://diatomenterprises.com/wp-content/uploads/2022/09/reactJS_logo.jpeg" alt="logo"/>
            <h5>This is a List:</h5>
            <ul>
            {list['drinks'].map((item) => (
                <li key={item}>{item}</li> 
                ))}
            </ul>
        </div>
    )
}

export default Exercise;