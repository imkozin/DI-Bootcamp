import './User.css'

const User = (props) => {
    console.log(props);
    const {userinfo} = props;

    return (
        <div className="userstyle">
            <img src={`https://robohash.org/${userinfo.id}?size=150x150`} alt="robo-pic"/>
            <h2> {userinfo.name} </h2>
            <h4> {userinfo.email} </h4>
            <p> {userinfo.username} </p>
        </div>
    );
}
 
export default User;