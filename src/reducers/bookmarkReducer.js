import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../constants/bookmarkContants";

export const bookmarkReducer = (
    state = { bookmarkItems: [] },
    { type, payload }
) => {
    switch (type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                bookmarkItems: [...state.bookmarkItems, payload],
            };
        case REMOVE_BOOKMARK:
            return {
                ...state,
                bookmarkItems: [
                    ...state.bookmarkItems.filter(
                        (item) => item.id !== payload
                    ),
                ],
            };
        default:
            return state;
    }
};
