import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/loadingScreen";
import NewsBlock from "../components/newsBlock";
import GetNewsFeed from "../functions/getNewsFeed";

function NewsScreen(props) {
    const [orderBy, setOrderBy] = useState("newest");
    const [pageNumber, setPageNumber] = useState(1);
    const [lastShow, setLastShow] = useState(false);
    const bookmark = useSelector((state) => state.bookmark);
    const { bookmarkItems } = bookmark;

    const orderByHandler = (e) => {
        setOrderBy(e.target.value);
    };
    const { newsList, loading, error, hasMore } = GetNewsFeed(
        pageNumber,
        props.searchText,
        20,
        props.section,
        orderBy
    );
    const [element, setElement] = useState(null);
    const lastNewsRef = useRef(
        new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    moreLoading();
                }
            },
            { threshold: 1 }
        )
    );
    useEffect(() => {
        console.log("effect");
        const currentElement = element;
        const currentObserver = lastNewsRef.current;
        if (currentElement) {
            currentObserver.observe(currentElement);
        }
    }, [element, loading]);

    const lasShowHandle = () => {
        setLastShow(true);
    };

    const moreLoading = () => {
        console.log("load");
        setPageNumber((prev) => prev + 1);
    };

    return (
        <div className='news-container'>
            <div className='header-title flex'>
                <div className='top-text head-lora-font'>{props.title}</div>
                <div className='top-side-text'>
                    <select
                        name='select-order'
                        className='select-order'
                        id=''
                        onChange={(e) => {
                            orderByHandler(e);
                        }}
                        value={orderBy}
                    >
                        <option value='newest'>Newest</option>
                        <option value='oldest'>Oldest</option>
                    </select>
                </div>
            </div>
            {newsList.map((data, index) => {
                if (newsList.length === index + 1 && newsList.length != 0) {
                    return (
                        <div className='news-flex-item'>
                            <NewsBlock
                                onRef={lasShowHandle}
                                key={data.id}
                                data={data}
                            />
                        </div>
                    );
                } else {
                    return (
                        <div className='news-flex-item'>
                            <NewsBlock key={data.id} data={data} />
                        </div>
                    );
                }
            })}
            {loading && (
                <div onClick={moreLoading} className='loading'>
                    <LoadingScreen />
                </div>
            )}
            {!loading && !props.noInfiniteLoop && lastShow && (
                <div ref={setElement}>Load</div>
            )}
        </div>
    );
}

export default NewsScreen;
