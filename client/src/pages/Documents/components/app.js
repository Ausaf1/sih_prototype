import React from 'react';
import Card from './Cards';
import "./cards.css";
// import Contacts from '../contact';

// function createCard(contact) {
//   return (
//     <Card
//       key={contact.id}
//       name={contact.name}
//       imgURL={contact.imgURL}
//       phone={contact.phone}
//       email={contact.email}
//     />
//   )
// }

function App() {
    return (
        <div>
            <h1 className='heading'>Important Documents</h1>
            <Card
                name="Scheme"
                imgURL="https://cdn-icons-png.flaticon.com/512/888/888979.png"
                phone="Download the document for more information"
                email="sadhasjk@gmail.com"
            />
            <Card
                name="Procedure"
                imgURL="https://cdn-icons.flaticon.com/png/512/3976/premium/3976555.png?token=exp=1659452076~hmac=3961f0821285537f3ea35841cfb34b38"
                phone="Download the document for more information"
                email="sadhasjk@gmail.com"
            />
            <Card
                name="More Details"
                imgURL="https://cdn-icons-png.flaticon.com/512/2541/2541988.png"
                phone="Download the document for more information"
                email="sadhasjk@gmail.com" s
            />
        </div>
    );
}

export default App;