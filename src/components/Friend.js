import Button from './Button';



const Friend = ({ friend, onChooseFriend }) => {

    const selectFriend = (id) => {
        onChooseFriend(id);
    }

    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {  friend.balance < 0 && (
                <p className='red'>Wisz kumplowi imieniem {friend.name} PLN {friend.balance}</p>
            )}
            {  friend.balance > 0 && (
                <p className='green'>{friend.name} Wisi Ci PLN {friend.balance}</p>
            )}
            {  friend.balance === 0 && (
                <p className='black'>Ty i {friend.name} jesteście kwita</p>
            )}

            <Button onClick={() => selectFriend(friend.id)}>Wybierz</Button>
        </li>
    )
}

export default Friend;