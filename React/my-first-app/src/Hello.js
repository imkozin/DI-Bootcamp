const Hello = (props) => {
    const {name, email} = props;
    return (
        <div>
            <h1>Hello {name}</h1>
            <h2>{email}</h2>
        </div>
    )
}

export default Hello;