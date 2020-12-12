import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/loadingScreen";
import NewsBlock from "../components/newsBlock";
import TopFeed from "../components/TopFeed";
import ViewBookmarkButton from "../components/ViewBookmarkButton";
import GetNewsFeed from "../functions/getNewsFeed";
import "./homeScreen.css";

function HomeScreen(props) {
    const [orderBy, setOrderBy] = useState("newest");
    const { newsList, loading, error } = GetNewsFeed(
        1,
        props.searchText,
        8,
        "news",
        orderBy
    );
    const sportList = GetNewsFeed(1, props.searchText, 3, "sport", orderBy);
    const cultureList = GetNewsFeed(1, props.searchText, 3, "culture", orderBy);
    const lifestyleList = GetNewsFeed(
        1,
        props.searchText,
        3,
        "lifeandstyle",
        orderBy
    );

    const orderByHandler = (e) => {
        setOrderBy(e.target.value);
    };

    return (
        <>
            {loading || newsList.length === 0 ? (
                <LoadingScreen />
            ) : (
                <div className='news-container'>
                    <div className='header-title flex'>
                        <div className='top-text head-lora-font'>Top story</div>
                        <div className='top-side-text'>
                            <ViewBookmarkButton /> &nbsp;&nbsp;
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
                    <div className='grid-container'>
                        <div className='top-news'>
                            <NewsBlock
                                key={newsList[0].id}
                                data={newsList[0]}
                                sub='sub'
                            />
                        </div>
                        <div className='top-news'>
                            <NewsBlock
                                key={newsList[1].id}
                                data={newsList[1]}
                            />
                        </div>
                        <div className='top-news'>
                            <NewsBlock
                                key={newsList[2].id}
                                data={newsList[2]}
                            />
                        </div>
                        <div className='top-news no-img'>
                            <NewsBlock
                                key={newsList[3].id}
                                data={newsList[3]}
                                noImg
                            />
                        </div>
                        <div className='top-news no-img'>
                            <NewsBlock
                                key={newsList[4].id}
                                data={newsList[4]}
                                noImg
                            />
                        </div>
                    </div>
                    <div className='grid-3-container'>
                        <div className='grid-news'>
                            <NewsBlock
                                key={newsList[5].id}
                                data={newsList[5]}
                                gridNews
                                sub
                            />
                        </div>

                        <div className='grid-news'>
                            <NewsBlock
                                key={newsList[6].id}
                                data={newsList[6]}
                                gridNews
                                sub
                            />
                        </div>

                        <div className='grid-news'>
                            <NewsBlock
                                key={newsList[7].id}
                                data={newsList[7]}
                                gridNews
                                sub
                            />
                        </div>
                    </div>
                    <TopFeed newsProps={sportList} title='Sport' link='sport' />
                    <TopFeed
                        newsProps={cultureList}
                        title='Culture'
                        link='culture'
                    />
                    <TopFeed
                        newsProps={lifestyleList}
                        title='LifeStyle'
                        link='lifeandstyle'
                    />
                </div>
            )}
        </>
    );
}

export default HomeScreen;
