import React from 'react';
import ViewComp from "../viewComp/ViewComp";
import './feed.css'

function Feed(props) {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <ViewComp/>
                <ViewComp/>
                <ViewComp/>
                <ViewComp/>
            </div>
        </div>
    );
}

export default Feed;