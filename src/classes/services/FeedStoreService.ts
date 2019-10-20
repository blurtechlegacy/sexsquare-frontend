import {fetchSexNotes} from "./api/FeedApi";
import {IFetch} from "../models/IFetch";
import {ISexNote} from "../models/ISexNote";
import {getState} from "../../store";

class FeedStoreService {

    public getAllSexNote = async (): Promise<IFetch<ISexNote>> => {
        const state = getState().feed;
        let result: any;
        if (state.length > 0) {
            result = {
                items: state || [],
                total: state.length || 0,
            };
        } else result = await fetchSexNotes();
        return {
            items: result.items || [],
            total: result.items.length || 0,
        };
    }
}

export default new FeedStoreService()
