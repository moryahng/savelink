import './App.css';
import AddLink from './Components/AddLink';
import Search from './Components/Search';
import Links from './Components/Links';
import { useState } from 'react';
import logo from './assets/savelink-logo.png'


function App() {
  //localStorage.clear()
  const localStorageLinks = localStorage.getItem("links")
  const parsedLinks = localStorageLinks === null ? [] : JSON.parse(localStorageLinks)

  const [links, setLinks] = useState(parsedLinks)

  const addLink = (name, url, hashtags) => {
    const newItem = {name: name, url: url, hashtags: hashtags}
    const newLinks = links.concat(newItem)
    console.log("newLinks",newLinks)
    setLinks(newLinks)
    localStorage.setItem("links", JSON.stringify(newLinks))
  }


  const [search, setSearch] = useState("")

  const searchResult = (search) => {
    console.log(search)
    return links.filter((link) => {
      return(link.name.indexOf(search) > -1 ||
      link.url.indexOf(search) > -1) ||
      link.hashtags
          .map((tag) => {
            return tag.indexOf(search) > -1;
          })
          .indexOf(true) > -1
      })
    
  }

  return (
    <>
    <div class="hero">
    <img src={logo}/>
    <h4>Save Link Application</h4>
    <h5>So that you don't need to use the in-built bookmark function in your browser.</h5>
    </div>
    <AddLink addLink={addLink}/>
    <Search searchLink={setSearch}/>
    <Links links={searchResult(search)}/>
    </>
  );
}

export default App;
