import React from "react";
import { Link } from "react-router-dom";
import NewsBlock from "./newsBlock";

function TopFeed(props) {
    const newsProps = props.newsProps;
    const title = props.title;
    const link = props.link;
    return (
        !newsProps.loading &&
        newsProps.newsList.length !== 0 && (
            <div className='top-feed flex-col flex-wrap'>
                <div className='top-feed-seemore flex'>
                    <div className='top-feed-title head-lora-font'>{title}</div>
                    <div className='see-more'>
                        <Link to={link}>See More...</Link>
                    </div>
                </div>
                <div className='top-feed-container flex flex-wrap'>
                    {newsProps.newsList.map((data) => (
                        <div className='news-flex-item'>
                            <NewsBlock key={data.id} data={data} />
                        </div>
                    ))}
                </div>
            </div>
        )
    );
}

export default TopFeed;
