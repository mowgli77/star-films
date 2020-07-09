import React from "react";
import Item from "./Item";

const ItemOk = ({p}) => {
    return <div>
        {Object.keys(p).map(key => <Item title={key} name={p[key]}/>)}
    </div>
}
export default ItemOk