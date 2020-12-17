import * as ActionTypes from '../ActionTypes.js'

export default (state, action) => {
    const {counterCaption} = action
    let result = {}
    console.log('statesatesate:in', state, action);
    switch(action.type){
        case ActionTypes.INCREMENT:
            result = {...state, [counterCaption]: state[counterCaption] + 1}
            console.log('statesatesate:out', result);
            console.log(state);
            return result
        case ActionTypes.DECREMENT:
            return {...state, [counterCaption]:state[counterCaption] - 1}
        default:
            return state
    }
}