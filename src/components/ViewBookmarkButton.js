import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BookmarkButton.css";

function ViewBookmarkButton(props) {
    return (
        <>
            <Link to='/bookmarks'>
                <button className='bookmark-button'>
                    <FontAwesomeIcon icon={["fa", "bookmark"]} />
                    &nbsp; View Bookmarks
                </button>
            </Link>
        </>
    );
}

export default ViewBookmarkButton;
