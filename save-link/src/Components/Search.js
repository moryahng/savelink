import { useState } from "react"
import searchimg from "../assets/search.gif"

export default function Search(props) {
    //props.search
    const [searchKey, setSearchKey] = useState ("")
    
    const changeSearchKey = (event) => {
        event.preventDefault()
    setSearchKey(event.currentTarget.value)
    props.searchLink(event.currentTarget.value)
    }
    
    return (
        <div className="searchbar">
            <img class="searchimg" src={searchimg}></img>
           <input type="search" placeholder="search..." value={searchKey} onChange={changeSearchKey}/>
        </div>
    )
}
