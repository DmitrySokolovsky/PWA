import { LOAD_DATA } from './actions';

const initialState = {data: [
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Jane',
        age: 25
    },
    {
        name: 'James',
        age: 25
    },
]};

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DATA: 
            return [
                ...state, action.payload
            ]
        default: 
            return state;
    }
}