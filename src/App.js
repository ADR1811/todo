import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Component/Card";
import {CardList} from "./Data/CardList";
import Form from "./Component/Form";

export default function App () {

    const [cards, setCards] = useState(CardList);
    
    return (
         <>
             <Form setCards={setCards}/>
             <div className='row row-cols-2 row-cols-md-4 g-2 p-5' id ="cards">
                  {cards.map(
                         (card,index) => (
                              <Card title={card.title} content={card.content} key={card.id} id={index} cards={cards} setCards={setCards}/>
                         )
                  )}
             </div>
             
         </>
    )
}