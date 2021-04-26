import { combineReducers } from 'redux'
import { AppState } from './types'
import { taskReducer } from './tasks/reducers'

export default combineReducers<AppState>({
    tasks: taskReducer,
})