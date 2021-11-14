import './Title.css';
export default function Title(props){
    return    (
        <div className='title_head'>
            <h1 className="title">{props.title}</h1>
            <br/>
            <p className="subtitle">{props.sub}</p>
        </div>
    )
}   