import { useState } from "react";


import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Mariusz",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Bartek",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Marcin",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


const App = () => {
    const [selectedFriend, setSelectedFriend] = useState(initialFriends[0]);
    const [friends, setFriends] = useState(initialFriends);

    const chooseFriend = (id) => {
        const friend = initialFriends.find((friend) => friend.id === id);
        setSelectedFriend(friend);

    }

    const addFriend = (e, name, image) => {
        e.preventDefault();

        const newFriend = {
            id: Math.floor(Math.random() * 100000),
            name,
            image,
            balance: 0,
        }
        const friendsCopy = [...friends];
        friendsCopy.push(newFriend);
        setFriends(friendsCopy);
    }

    const splitBill = (e, yourPart, friendPart, whoPays) => {
        e.preventDefault();
        let newBalance = 0;

        if (whoPays === 'you') {
            newBalance = parseInt(yourPart)-friendPart;
        }
        else if (whoPays === 'friend'){
            newBalance = friendPart-parseInt(yourPart);
        }

        const friendsCopy = [...friends];
        const index = friendsCopy.findIndex((friend) => friend.id === selectedFriend.id);
        friendsCopy[index].balance = friendsCopy[index].balance + newBalance;

        setFriends(friendsCopy);

    }


    return (
        <div className="app">
            <div className='sidebar'>
                <FriendsList onChooseFriend={chooseFriend} friends={friends} />
                <FormAddFriend addFriend={addFriend}/>
            </div>
            <FormSplitBill selectedFriend={selectedFriend} splitBill={splitBill}/>
        </div>
    )
    }

export default App;