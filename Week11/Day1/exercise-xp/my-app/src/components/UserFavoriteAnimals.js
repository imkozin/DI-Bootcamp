const UserFavoriteAnimals = (props) => {
    console.log(props);
    const {animals} = props;
    return (
        <ul>
            {
            animals.map((item, index) => {
              return <li>{item}</li>
            })
            }
        </ul>
    )
}

export default UserFavoriteAnimals;