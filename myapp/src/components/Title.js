export default function Title(props){
    return    (
        <>
            <h1 className="title">{props.title}</h1>
            <br/>
            <p className="subtitle">{props.sub}</p>
        </>
    )
}   