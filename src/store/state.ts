export const initialState = {
    isAuth: 'false'
}

export type IState = typeof initialState

export interface IAppState {
    app: IState
  }