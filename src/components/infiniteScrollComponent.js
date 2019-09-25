import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import EmptyViewComponent from './emptyViewComponent';

export default function InfiniteScrollComponent(props){
    return (
        <InfiniteScroll
            dataLength = {props.data.length}
            next = {props.next || null}
            hasMore={props.hasMore || false}
            loader={<p>Loading...</p>}
            scrollableTarget = {props.target}
        >
            {props.data.length != 0 ? props.children : 
            <EmptyViewComponent 
                emptyText = {props.emptyText}
            />}
        </InfiniteScroll>
    )
}