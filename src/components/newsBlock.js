import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./newsBlock.css";

function NewsBlock(props) {
    let cssUnderline;
    const stripedHtml = props.sub
        ? props.data.fields.body.replace(/<[^>]+>/g, "")
        : "";
    switch (props.data.pillarName) {
        case "News":
            cssUnderline = "underline-news";
            break;
        case "Sport":
            cssUnderline = "underline-sport";
            break;
        case "Arts":
            cssUnderline = "underline-culture";
            break;
        case "Lifestyle":
            cssUnderline = "underline-lifestyle";
            break;

        default:
            cssUnderline = "underline-news";
            break;
    }
    return (
        <Link to={"article/" + props.data.id}>
            <div className={"block-news-container shadow " + cssUnderline}>
                {!props.noImg && (
                    <div className='block-news-image'>
                        <img
                            ref={props.onRef}
                            src={
                                props.data.fields && props.data.fields.thumbnail
                                    ? props.data.fields.thumbnail
                                    : "./blankimage.png"
                            }
                            alt=''
                        />
                    </div>
                )}

                <div
                    className={
                        !props.noImg
                            ? "block-news-title"
                            : "block-news-title full-news"
                    }
                >
                    <div className='block-news-title-main sub-lora-font p-1'>
                        {props.data.webTitle}
                    </div>
                    {props.sub && (
                        <div className='block-news-title-sub truncate-overflow'>
                            {stripedHtml}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default NewsBlock;
