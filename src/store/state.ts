import {ISexNote} from "../classes/models/ISexNote";

export const initialState = {
    feed: [],
};

export interface IState {
    feed: ISexNote[]
}

export interface IAppState {
    app: IState
}
