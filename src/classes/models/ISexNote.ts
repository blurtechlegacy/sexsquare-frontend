import {IForm} from "./IForm";

export interface IPlace{
    center: {
        lat: number
        lng: number
    }
    zoom: number
}

export interface ISexNote extends IForm {
    nickname: string
    partners: string[]
    timestamp: string
    place: IPlace
    private: boolean
    types?: string[]
    contraceptive?: string[]
    tags?: string[]
    notes?: string
}
