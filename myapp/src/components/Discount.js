import './Discount.css';

export default function Discount(props) {
    return (
        <div className='discount_class'>
            <div className='discount' style={
                {
                    border:'4px solid',
                    //camel case of the normal style hiven symbol with ternary option
                    borderColor:props.isSales ?'black':'blue',
                    textAlign:'center'


                }
            }>
                {props.children}
                
            <button onClick={props.handleOnchild}
            className={props.isSales ? 'btn-style':''}
            >Click to Hide!</button>
            </div>
            
        </div>
    )
}
