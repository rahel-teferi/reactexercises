import peopleInfo from '../data/people.json'

export const People = () => {
return(
  <ul> 
  {peopleInfo.map(person  => (<li key={person.id}> {person.name} </li> ))}
</ul>
)}




       // partial
    //    function showPersons() {
    //     const names=[];
    //     for (let person of peopleInfo) {
    //         names.push(<li>{person.name}</li>);
    //     }
    //     return names; // ["<li>Pedro Remoaldo</li>", "<li>Natalia</li>", "<li>Senouci</li>"]
    // }
  //return (
          
        {/* {peopleInfo.map(person  => {
            return(<li>{person.name}</li> 
        )
        })
    } */}
    
        
        
    
    {/* 
    
   // if we use the partial we use the below code to call the function
   // { showPersons() }  */}
    


