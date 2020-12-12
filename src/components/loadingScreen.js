import React from "react";

function LoadingScreen() {
    return (
        <div className='loading-container'>
            <div className='lds-ring'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingScreen;
