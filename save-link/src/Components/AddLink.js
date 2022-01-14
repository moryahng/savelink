import { useState } from "react"

export default function AddLink(props) {

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [hashtags, setHashTags] = useState([]);
    

    const submission = (event) => {
        event.preventDefault();
        props.addLink(name, url, hashtags);
        setName("");
        setUrl("");
        setHashTags([]);
    }

    const [tagsInput, setTagsInput] = useState("");
    
    const handleKeyUp = (event) => {
        if (event.key == ' ') {
            const newHashTags = hashtags.concat(event.currentTarget.value)
            setHashTags(newHashTags)
            setTagsInput("")

          }     
    }

    const removetag = (event) => {
        const i = event.currentTarget.id
        console.log("index", i)
        const removeTag = [...hashtags]
        removeTag.splice(i, 1)
        setHashTags(removeTag)
    }


    return (
        
        <div class="addlink-div">
            <form class="addlink-form">
                <label><h3>Name</h3></label>
                <input required class="name" type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>
                <label><h3>Website</h3></label>
                <input required class="url" type="url" value={url} pattern="https://.*" onChange={(event) => {setUrl(event.target.value)}}/>
                <div class="wrapper">
                <h3>Input your hashtag below and press space: </h3>
                <input type="text" id="hashtags" autocomplete="off" placeholder="#hashtag" value={tagsInput} onKeyUp={handleKeyUp} onChange={(event) => setTagsInput(event.currentTarget.value)}/>
                <div class="tag-container">
                    {hashtags.map((hashtag, i) => 
                        (
                        <div key={i} class="tagDiv">
                        <p id="i" class="tag" onClick={removetag}> {hashtag} </p>
                        </div>
                        )
                    )}
                </div>
                </div>
                <input type="submit" onClick={submission}/>
            </form>
        </div>
    )
}
