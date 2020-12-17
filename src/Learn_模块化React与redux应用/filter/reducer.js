import {SET_FILTER} from './actionsType'
import {FilterTypes} from '../constants'
import { actions } from '../todos'
export default (state = FilterTypes.ALL, action) => {
    switch(action.type){
        case SET_FILTER: {
            return action.filter
        },
        default: {
            return state
        }
    }
}
