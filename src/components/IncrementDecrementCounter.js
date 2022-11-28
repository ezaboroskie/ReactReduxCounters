import {connect} from 'react-redux'


function IncrementDecrementCounter(props){

    const handleIncrement = () =>{
        props.onIncrement()
    }

    const handleDecrement = () =>{
        props.onDecrement()
    }

    return(
        <>
            <button onClick = {handleIncrement}>Increment</button>
            <button onClick = {handleDecrement}>Decrement</button>
        </>
    )

}    

    const mapStateToProps = (state)=>{
        return{
            ctr:state.count
        }
    }

    const mapDispatchToProps = (dispatch)=>{
        return{
            onIncrement: ()=>dispatch({type:'INCREMENT'}),
            onDecrement: ()=>dispatch({type:'DECREMENT'})

        }   
    }

export default connect(mapStateToProps, mapDispatchToProps)(IncrementDecrementCounter);