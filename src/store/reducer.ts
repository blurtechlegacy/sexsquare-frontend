import { createBrowserHistory, History } from 'history'
import { AnyAction, combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { initialState, IState } from './state'
export const history: History = createBrowserHistory()

export const APP_NEXT_STATE = '@APP_NEXT_STATE'

const appReducer = (state: IState = initialState, action: AnyAction) =>
    action.type === APP_NEXT_STATE ? action.state : state

export const rootReducer = combineReducers({
    app: appReducer,
    router: connectRouter(history)
})
