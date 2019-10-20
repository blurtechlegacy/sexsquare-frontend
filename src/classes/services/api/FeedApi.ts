import axios from 'axios';
import {IFetch} from "../../models/IFetch";
import {ISexNote} from "../../models/ISexNote";
import {API_URL} from "../../../configs/settings";
import {appUpdateState} from "../../../store";

export const fetchSexNotes = async (): Promise<IFetch<ISexNote>> => {
    let result: any;
    if(!result) {
        const mock = [
            {
                nickname: 'Elizabeth',
                partners: ['SrgGrch'],
                timestamp: '1567343304874',
                place: {
                    center: {
                        lat: 54.986992,
                        lng: 82.915095,
                    },
                    zoom: 14,
                },
                types: ['anal', 'oral'],
                notes: '',
                private: true,
            },
            {
                nickname: 'SrgGrch',
                partners: ['Elizabeth'],
                timestamp: '1567340306874',
                place: {
                    center: {
                        lat: 54.98666,
                        lng: 82.916079,
                    },
                    zoom: 14,
                },
                tags: ['BDSM', 'Sex with toys'],
                types: ['anal', 'oral'],
                contraceptive: ['Condoms', 'Pills'],
                notes: '',
                private: true,
            },
            {
                nickname: 'Jane',
                partners: ['John', 'Bob', 'Eugene'],
                timestamp: '1567303204874',
                place: {
                    center: {
                        lat: 54.983992,
                        lng: 82.911095,
                    },
                    zoom: 14,
                },
                types: ['anal'],
                contraceptive: ['Condoms'],
                notes: '',
                private: true,
            },
            {
                nickname: 'Bob',
                partners: ['Eugene', 'Jane'],
                timestamp: '1567043202874',
                place: {
                    center: {
                        lat: 54.986792,
                        lng: 82.915195,
                    },
                    zoom: 14,
                },
                contraceptive: ['Pills'],
                tags: ['Gay sex', 'Swing'],
                notes: '',
                private: true,
            },
            {
                nickname: 'John',
                partners: [],
                timestamp: '1565000004874',
                place: {
                    center: {
                        lat: 54.986932,
                        lng: 82.925015,
                    },
                    zoom: 14,
                },
                notes: '',
                private: true,
            },
        ];
        result = {
            data: mock
        };
    } else result = API_URL && await axios.get(`${API_URL}api/feed/`);
    appUpdateState(s => {
        s.feed = (result && result.data) || [];
    });
    return {
        items: result.data || [],
        total: result.data.length || 0,
    }
};
