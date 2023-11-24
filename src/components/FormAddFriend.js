import { useState } from 'react';
import Button from './Button';

const FormAddFriend = ({ addFriend }) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    return (
        <form className="form-add-friend" onSubmit={(e) => addFriend(e, name, image)}>
            <label>😇 Imię ziomka</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>🧰 Url obrazka</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
            <Button>Dodaj</Button>

        </form>
    )
}

export default FormAddFriend;