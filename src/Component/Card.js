
export default function Card({title, content , id, cards, setCards}) {
     // add setCards to local storage
     
     const handleDelete = event => {
          setCards(
               previousCard => {
                    const previousCardList = [...previousCard];
                    previousCardList.splice(id, 1);
                    return previousCardList;
               }
          );
     }

     const handleFait = event => {
          setCards(
               previousCard => {
                    const previousCardList = [...previousCard];
                    // replace 'à faire' by 'fait'
                    // if (previousCardList[id].title.includes('À faire')) {
                    //      previousCardList[id].title = previousCardList[id].title.replace('À faire', 'Fait');
                    // }
                    // else {
                    //      previousCardList[id].title = previousCardList[id].title.replace('Fait', 'À faire');
                    // }
                    title.includes('À faire') ? previousCardList[id].title = title.replace('À faire', 'Fait') : previousCardList[id].title = title.replace('Fait', 'À faire');
                    return previousCardList;
               }
               
          );
     }

     return (
          <div className ="col" id={id}>
               <div className="card">
                    <div className="card-body">
                         <h5 className="card-title">{title}</h5>
                         <p className="card-text">{content}</p>
                         <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
                         {title.includes('À faire') ? <button type="button" className="btn btn-primary" onClick={handleFait}>Fait</button> : <button type="button" className="btn btn-primary" onClick={handleFait}>À faire</button>}
                              
                         
                    </div>
               </div>
          </div>
     )
}