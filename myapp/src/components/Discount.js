import './Discount.css';

export default function Discount(props) {
    return (
        <div className='discount_class'>
            <div className='discount'>
                {props.children}
                
            <button onClick={props.handleOnchild}>Click to Hide!</button>
            </div>
            
        </div>
    )
}
