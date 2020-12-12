import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../constants/bookmarkContants";

export const addBookMark = (idText, bodyText) => async (dispacth, getState) => {
    dispacth({
        type: ADD_BOOKMARK,
        payload: idText,
    });
    localStorage.setItem(
        "bookmarkItems",
        JSON.stringify(getState().bookmark.bookmarkItems)
    );
};

export const removeBookMark = (id) => async (dispacth, getState) => {
    dispacth({
        type: REMOVE_BOOKMARK,
        payload: id,
    });
    localStorage.setItem(
        "bookmarkItems",
        JSON.stringify(getState().bookmark.bookmarkItems)
    );
};
