import {ExploreTopBooks} from "./components/ExploreTopBooks";
import {Carousel} from "./components/Carousel";
import {Heroes} from "./components/Heroes";
import {LibraryServices} from "./components/LibraryServices";
import React from "react";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heroes/>
            <LibraryServices/>
        </>
    );
}