import React from "react"
import "./filterItem.scss"
const FilterItem = ({filter, key}) => {
    return (
        <div className="filter-item">
            {filter.icon && filter.icon}
            <div className="filter-name">{filter.title}</div>
        </div>

    );
}

export default FilterItem;
