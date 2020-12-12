import Axios from "axios";
import React, { useEffect, useState } from "react";

function GetNewsFeed(pageNumber, query, pageSize, section, orderBy) {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setNewsList([]);
    }, [query, orderBy]);

    useEffect(() => {
        setLoading(true);
        let cancel;
        Axios.get(
            `https://content.guardianapis.com/search?show-elements=image`,
            {
                params: {
                    "api-key": "259d8911-22c2-4572-850c-abed061885b1",
                    section: section ? section : undefined,
                    page: pageNumber,
                    q: query ? query : undefined,
                    "order-by": orderBy ? orderBy : "newest",
                    "page-size": pageSize,
                    "show-fields": "body,thumbnail,lastModified",
                },
                cancelToken: new Axios.CancelToken((c) => (cancel = c)),
            }
        )
            .then((res) => {
                console.log(res.data);
                setLoading(false);

                setNewsList((prevList) => {
                    return [
                        ...new Set([...prevList, ...res.data.response.results]),
                    ];
                });
                setHasMore(res.data.response.results.length > 0);
            })
            .catch((e) => {
                if (Axios.isCancel(e)) return;
            });
        return () => cancel();
    }, [query, pageNumber, orderBy]);

    return { newsList, loading, error, hasMore };
}

export default GetNewsFeed;
