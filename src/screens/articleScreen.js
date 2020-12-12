import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BookmarkButton from "../components/BookmarkButton";
import LoadingScreen from "../components/loadingScreen";
import GetArticleFeed from "../functions/getArticleFeed";
import moment from "moment-timezone";
import dateFormat from "dateformat";
import "./articleScreen.css";

function ArticalScreen(props) {
    let pars = useLocation();
    const [isSanckShow, setIsSanckShow] = useState(false);
    const [addingBookmark, setaddingBookmark] = useState(true);
    const idText = pars.pathname.substring(8);
    const { loading, newsArticle, error } = GetArticleFeed(idText);

    const snackbarHandler = (addingBookmark) => {
        if (addingBookmark) setaddingBookmark(true);
        else setaddingBookmark(false);
        setIsSanckShow(true);
        setTimeout(() => {
            setIsSanckShow(false);
        }, 3000);
    };

    return (
        <>
            {loading && newsArticle.length == 0 ? (
                <LoadingScreen />
            ) : (
                <div className='news-container'>
                    <div className={isSanckShow ? "snackbar show" : "snackbar"}>
                        {addingBookmark
                            ? "Article has been saved"
                            : "Article has been removed"}
                    </div>
                    <div className='text-container'>
                        <div className='bookmark'>
                            <BookmarkButton
                                data={newsArticle}
                                snackbarHandler={snackbarHandler}
                            />
                        </div>

                        <div className='news-time'>
                            {dateFormat(
                                moment(newsArticle.webPublicationDate)
                                    .tz("Europe/Berlin")
                                    .format(),
                                "ddd dd mmm yyyy h.MM "
                            )}{" "}
                            BST
                        </div>
                        <div className='news-header'>
                            <h1> {newsArticle.webTitle}</h1>
                        </div>

                        <div className='news-trails-text'>
                            <h2>{newsArticle.fields.headline}</h2>
                        </div>
                        <div
                            className='news-body'
                            dangerouslySetInnerHTML={{
                                __html: newsArticle.fields.body,
                            }}
                        ></div>
                    </div>
                    <div className='image-container'>
                        <div className='news-thumbnail'>
                            <img src={newsArticle.fields.thumbnail} alt='' />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ArticalScreen;
