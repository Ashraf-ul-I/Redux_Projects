import {combineReducers} from 'redux';
import reducer from './products/reducer'
const rootReducer=combineReducers({
   products:reducer,
})

export default rootReducer