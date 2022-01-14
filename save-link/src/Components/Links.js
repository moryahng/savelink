export default function Links(props) {


    return (
        <>
        {props.links && props.links.length > 0 
        ? props.links.map( (link, i) =>
            (
            <div key={i} class="linkDiv" >
            <a href={link.url}><h1>{link.name}</h1></a>
            <p>{link.hashtags.map( (hashtag, i) => {
                return (
                <div class="link-hashtag">#{hashtag}</div>)
            })}</p>
            </div>
            ))
            :<p>No result</p>}
        </>
    )
}

