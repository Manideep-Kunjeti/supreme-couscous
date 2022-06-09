import React from 'react'
import "./delivery.scss";
import Filters from "../common/filters";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";
import ExploreSection from "../exploreSection";
import {restaurants} from "../../data/restaurant";

const deliveryFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rs-settings-sliders absolute-center"></i>,
        title: "Filters"
    },
    {
        id: 2,
        title: "Rating"
    },
    {
        id: 3,
        title: "Safe Higenic"
    },
    {
        id: 4,
        title: "Pure Veg"
    },
    {
        id: 5,
        icon: <i className="fi fi-rs-apps-sort absolute-center"></i>,
        title: "Delivery Time"
    },
]

const restaurantList = restaurants;


const Delivery = () => {
    return (
        <div>
            <div className="max-width">
                <Filters filterList={deliveryFilters}/>
            </div>
            <DeliveryCollections/>
            <TopBrands/>
            <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Sri Lanka"/>
        </div>

    );
}

export default Delivery;
