
const initialState = {
    count: 20
}

const reducer = (state=initialState, action)=>{
    if (action.type == 'INCREMENT'){
        return {
            ...state,
            count:state.count + 1
        }
    }

    if(action.type == 'DECREMENT'){
        return {
            ...state,
            count:state.count - 1
        }
    }

    if(action.type == 'ADD'){
        return {
            ...state,
            count: state.count + action.payload
        }
    }

    if(action.type == 'SUBTRACT'){
        return {
            ...state,
            count: state.count - action.payload
        }
    }

    return state
}

export default reducer