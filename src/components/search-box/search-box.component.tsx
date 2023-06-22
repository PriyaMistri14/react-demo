import { Component, ChangeEvent } from "react";

import '../search-box/search-box.styles.css'

// .........................................function based component.............................


type props={
    onChangeHandler: (event:ChangeEvent<HTMLInputElement>)=>void,
    
}

const SearchBox = (props:props)=>{
    const {onChangeHandler} = props
    return <input className='search' type='search' placeholder = 'search here!' onChange={props.onChangeHandler}/>



}


// ...........................................class based component........................................


// class SearchBox extends Component{
// render(){
//    return <input className='search' type='search' placeholder = 'search here!' onChange={this.props.onChangeHandler}/>
// }

// }


export default SearchBox
