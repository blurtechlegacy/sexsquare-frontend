import { createStore, Store } from 'redux'
import { rootReducer, APP_NEXT_STATE } from './reducer';
import produce from 'immer'
import { IAppState, IState } from './state';


let store: Store<IAppState>

export const initStore = () => 
    store = createStore(
        rootReducer,
        {}
    )



export const getState = () => store.getState().app

const setNextState = (state: IState, comment?: string) => {
    store.dispatch({ state, comment, type: APP_NEXT_STATE })
}

export const appUpdateState = (producer: (s: IState) => void) => {
    // @ts-ignore
    setNextState(
        produce(getState(), (s: IState) => {
            producer(s as IState)
        })
    )
}