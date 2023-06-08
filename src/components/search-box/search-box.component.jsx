import { Component } from "react";

import '../search-box/search-box.styles.css'

// .........................................function based component.............................


const SearchBox = (props)=>{
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
