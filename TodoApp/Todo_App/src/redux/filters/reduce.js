import { COLORSCHANGED, STATUSCHANGED } from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload,  // Set the status directly to the string payload
            };

        case COLORSCHANGED:
            const { color, changeType } = action.payload;
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    };
                case 'remove':
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color),
                    };
                default:
                    return state;
            }

        default:
            return state;
    }
};

export default reducer;
