import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookMark, removeBookMark } from "../actions/bookmarkAction";
import "./BookmarkButton.css";

function BookmarkButton(props) {
    const [isBooked, setIsBooked] = useState(false);
    const bookmark = useSelector((state) => state.bookmark);
    const { bookmarkItems } = bookmark;

    const dispatch = useDispatch();
    const addBookmark = () => {
        console.log("add bookmark");
        console.log(props);
        props.snackbarHandler(true);
        setIsBooked(true);
        dispatch(
            addBookMark({
                id: props.data.id,
                webTitle: props.data.webTitle,
                fields: {
                    thumbnail: props.data.fields.thumbnail,
                },
                pillarName: props.data.pillarName,
            })
        );
    };
    const removeBookmark = () => {
        props.snackbarHandler(false);
        setIsBooked(false);
        dispatch(removeBookMark(props.id));
    };

    useEffect(() => {
        bookmarkItems.map((item) => {
            if (item.id === props.data.id) {
                setIsBooked(true);
                return;
            }
        });
    }, []);
    return (
        <>
            {isBooked ? (
                <button className='bookmark-button' onClick={removeBookmark}>
                    <FontAwesomeIcon icon={["fa", "bookmark"]} />
                    &nbsp; REMOVE BOOKMARK
                </button>
            ) : (
                <button className='bookmark-button' onClick={addBookmark}>
                    <FontAwesomeIcon icon={["fa", "bookmark"]} />
                    &nbsp; ADD BOOKMARK
                </button>
            )}
        </>
    );
}

export default BookmarkButton;
