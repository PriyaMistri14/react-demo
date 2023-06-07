import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: 'Priya',

      monsters: [
        {
          name: 'Monster1'
        },
        {
          name: 'Monster2'
        },
        {
          name: 'Monster3'
        },
        {
          name: 'Monster4'
        },



      ],


      monsters_fetch: []


    }

  }



  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => 
      response.json())
      .then((users) => {

      this.setState(() => { return {monsters_fetch: users} }, () => { console.log(this.state); })

    })


  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <input className='search' type='search' placeholder = 'search here!' onChange={(event)=>{
            console.log(event.target.value)
            var search_text =  event.target.value.toLocaleLowerCase()
            console.log(search_text)

            var filtered_monsters = this.state.monsters_fetch.filter((monster)=>{
              return  monster.name.toLocaleLowerCase().includes(search_text)

            })
            console.log(filtered_monsters)

            this.setState(()=>{
              return {monsters_fetch:filtered_monsters}
            },()=>{console.log(this.state)})




          }}/>



          <div>
            {
              this.state.monsters_fetch.map((monster) => {
                return <h3>{monster.name}</h3>
              })
            }
          </div>




          <div>
            {
              this.state.monsters.map((monster) => {
                return <h3>{monster.name}</h3>
              })
            }
          </div>




          <p>{this.state.name}</p>

          <button onClick={() => {
            // this.setState({name:'Ram'})                        //either do this lines or do bottom lines 
            // console.log(this.state.name)                       // for async task 

            //syntext this.setState( ()=>{},()=>{})
            this.setState(() => {
              return this.setState({ name: 'Ram' })

            }, () => {
              console.log(this.state.name)
            })

          }}> Change name</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }


}


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
