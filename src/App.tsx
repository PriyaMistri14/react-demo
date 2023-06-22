
import './App.css';
import { Component } from 'react';


import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// ....................................function based componet for monster .......................

import { useState, useEffect, ChangeEvent } from 'react';

//converted into typescript

import { getData } from './util/data.util';

export type Monster = {
  id: string,
  name: string,
  email: string

}




const App = () => {
  const [filtered_monsters, set_filtered_monstres] = useState<Monster[]>([])
  const [monsters, set_monster] = useState<Monster[]>([])


  const onSearchChange = (event:ChangeEvent<HTMLInputElement>):void => {
    // console.log(event.target.value)
    var search_text = event.target.value.toLocaleLowerCase()
    // console.log(search_text)

    var f_monsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(search_text)

    })
    set_filtered_monstres(f_monsters)
    console.log(filtered_monsters)

  }



  useEffect(() => {

    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      set_monster(users)
      set_filtered_monstres(users)
    }

    fetchUsers()
    // fetch("https://jsonplaceholder.typicode.com/users")  // this fetch is centralize in util folder in getdata fun
    //     .then((response) => 
    //       response.json())
    //       .then((users) => { set_monster(users) 
    //             set_filtered_monstres(users)

    //     })


  }, [])

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filtered_monsters} />
    </div>
  )


}

















// .....................................................class based component for monster........................


// class App extends Component {

//   constructor() {
//     super()

//     this.state = {
//       // name: 'Priya',

//       // monsters: [
//       //   {
//       //     name: 'Monster1'
//       //   },
//       //   {
//       //     name: 'Monster2'
//       //   },
//       //   {
//       //     name: 'Monster3'
//       //   },
//       //   {
//       //     name: 'Monster4'
//       //   },



//       // ],


//       monsters_fetch: [],
//       filtered_monsters:[]


//     }

//   }



//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => 
//       response.json())
//       .then((users) => {

//       this.setState(() => { return {monsters_fetch: users, filtered_monsters:users} }, () => { console.log(this.state); })

//     })

//   }




//   onSearchChange=(event)=>{
//     console.log(event.target.value)
//     var search_text =  event.target.value.toLocaleLowerCase()
//     console.log(search_text)

//     var f_monsters = this.state.monsters_fetch.filter((monster)=>{
//       return  monster.name.toLocaleLowerCase().includes(search_text)

//     })


//      this.setState(()=>{
//       return {filtered_monsters:f_monsters}
//      },()=>{console.log(this.state.filtered_monsters)})

//     //  console.log("///////////")
//     // console.log(this.state.filtered_monsters)

//     // this.setState(()=>{
//     //   return {monsters_fetch:filtered_monsters}
//     // },()=>{console.log(this.state)})




//   }













//   render() {
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>


//         {/* <header className="App-header"> */}
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}

//           {/* <input className='search' type='search' placeholder = 'search here!' onChange={this.onSearchChange}/> */}
// <SearchBox onChangeHandler={this.onSearchChange}/>


//           {/* <div>
//             {
//               this.state.filtered_monsters.map((monster) => {
//                 return <h3>{monster.name}</h3>
//               })
//             }
//           </div> */}

//           <CardList monsters={this.state.filtered_monsters}/>




//           {/* <div>
//             {
//               this.state.monsters.map((monster) => {
//                 return <h3 key={monster.id}>{monster.name}</h3>
//               })
//             }
//           </div> */}




//           {/* <p>{this.state.name}</p> */}

//           {/* <button onClick={() => {
//             // this.setState({name:'Ram'})                        //either do this lines or do bottom lines 
//             // console.log(this.state.name)                       // for async task 

//             //syntext this.setState( ()=>{},()=>{})
//             this.setState(() => {
//               return this.setState({ name: 'Ram' })

//             }, () => {
//               console.log(this.state.name)
//             })

//           }}> Change name</button> */}
//           {/* <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p> */}
//           {/* <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a> */}
//         {/* </header> */}
//       </div>
//     );

//   }


// }



// ..............................................default function based component..........................

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
