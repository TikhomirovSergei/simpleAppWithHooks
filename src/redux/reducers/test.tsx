import { CHANGE_COUNTER } from "../actionTypes";

const initialState = {
    counter: 0,
};

export const test = (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_COUNTER: {
            return {
                ...state,
                counter: state.counter + 1,
            };
        }
        default:
            return state;
    }
};
