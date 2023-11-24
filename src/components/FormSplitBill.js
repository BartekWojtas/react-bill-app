import {useState, useEffect} from "react";
import Button from "./Button";

const FormSplitBill = ({selectedFriend, splitBill}) => {

    const [billCost, setBillCost] = useState(0);
    const [yourPart, setYourPart] = useState(0);
    const [friendPart, setFriendPart] = useState(0);
    const [whoPays, setWhoPays] = useState('you');

    useEffect(() => {
        setFriendPart(billCost - yourPart);
    }, [billCost, yourPart]);


    const handleWhoPays = (e) => {
        setWhoPays(e.target.value);
        console.log(e.target.value);
    }


    return (
        <form className="form-split-bill" onSubmit={(e) => splitBill(e, yourPart, friendPart, whoPays)}>
            <h2>Dzielisz rachunek z: {selectedFriend.name}</h2>

            <label>💰 Koszt Rachunku</label>
            <input type="number" value={billCost} min="0" onChange={(e) => {setBillCost(e.target.value)}}/>

            <label>🧰 Twoja część</label>
            <input type="number" value={yourPart} min="0" max={billCost} onChange={(e) => {setYourPart(e.target.value)}}/>

            <label>🧰 Część kumpla imieniem {selectedFriend.name}</label>
            <input type="text" disabled value={friendPart}/>

            <label>🧰 Kto płaci hajs?</label>
            <select onChange={handleWhoPays}>
                <option value="you">Ty</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>


            <Button>Podziel rachunek</Button>

        </form>
    )
};

export default FormSplitBill;