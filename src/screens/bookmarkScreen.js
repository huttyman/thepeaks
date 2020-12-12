import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NewsBlock from "../components/newsBlock";
import GetNewsFeed from "../functions/getNewsFeed";

function BookmarkScreen(props) {
    const bookmarkItems = useSelector((state) => state.bookmark.bookmarkItems);

    console.log(bookmarkItems);

    return (
        <div className='news-container'>
            {/* {bookmarkItems} */}
            {bookmarkItems.map((data, index) => {
                return (
                    <Link to={"article/" + data.id}>
                        <div className='news-flex-item'>
                            <NewsBlock key={data.id} data={data} />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default BookmarkScreen;
