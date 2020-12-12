import Axios from "axios";
import React, { useEffect, useState } from "react";

function GetArticleFeed(id) {
    const [newsArticle, setNewsArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        console.log(
            "https://content.guardianapis.com/" +
                id +
                "?page-size=10&show-elements=image"
        );
        Axios.get(
            "https://content.guardianapis.com/" +
                id +
                "?page-size=10&show-elements=image",
            {
                params: {
                    "api-key": "259d8911-22c2-4572-850c-abed061885b1",
                    "show-fields":
                        "body,trailText,headline,thumbnail,lastModified",
                },
            }
        ).then((res) => {
            if (res.data.response.content) {
                setNewsArticle(res.data.response.content);
                setLoading(false);
            }
        });
    }, [id]);

    return { newsArticle, loading, error };
}

export default GetArticleFeed;
