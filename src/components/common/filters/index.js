import React from "react"
import FilterItem from "./fitlerItem";
import "./filter.scss"

const Filters  = ({filterList}) => {
    return (
        <div className="filters">
        {filterList && filterList.map((filter) => {
            return <div><FilterItem filter={filter} key={filter.id}/></div>
        })}
    </div>
    )
}

export default Filters
