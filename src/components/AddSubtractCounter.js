import {useState} from 'react'
import {connect} from 'react-redux'

function AddSubtractCounter(props){

    const [counter , setCounter] = useState('')

    const handleChange = (e) => {
        setCounter(e.target.value)
    }

    const handleAdd = () => {
        props.onAdd(parseInt(counter))
    }

    const handleSubtract = () =>{
        props.onSubtract(parseInt(counter))
    }

    return(
        <>
            <input type = 'text' onChange = {handleChange}/>
            <button onClick = {handleAdd}>Add</button>
            <button onClick = {handleSubtract}>Subtract</button>
        </>
    )

}

const mapDispatchToProps = (dispatch) => {
    return{
        onAdd: (value) => dispatch({type:'ADD', payload: value}),
        onSubtract: (value) => dispatch({type:'SUBTRACT', payload: value})
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter);