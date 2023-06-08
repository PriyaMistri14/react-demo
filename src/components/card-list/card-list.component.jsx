import { Component } from "react";
import '../card-list/card-list.styles.css'



// ...................................function based component.................................

const CardList =(props)=>{
    const {monsters } = props
    
return(
    <div className="card-list">
    {
      monsters.map((monster) => {
        return <div key={monster.id} className='card-container'>
            <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
            <h3>{monster.name}</h3>
            <p>{monster.email}</p>
            
            </div>

      })
    }
  </div>
)


}



// ..............................................class based component..................................


// class CardList extends Component{
// render(){
//     // console.log(this.props)
//     // console.log(this.props.monsters)

//     const {monsters } = this.props
// // console.log({monsters})
// return(
//     <div className="card-list">
//     {
//       monsters.map((monster) => {
//         return <div key={monster.id} className='card-container'>
//             <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
//             <h3>{monster.name}</h3>
//             <p>{monster.email}</p>
            
//             </div>

//       })
//     }
//   </div>
// )
// }}



export default CardList;
