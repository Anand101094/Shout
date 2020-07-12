import { combineReducers } from 'redux'
import { shoutReducer } from '../reudcers/shoutReducer'
import { uiReducer } from '../reudcers/uiReducer'
import { userReducer } from '../reudcers/userReducer'

const rootReducer = combineReducers({
    shoutsData: shoutReducer,
    user: userReducer,
    ui: uiReducer,
})

export default rootReducer