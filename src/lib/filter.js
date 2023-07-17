import React from "react";
export const filter = (array,keyword) => {
    array = array.filter(item =>
        item.nick?.toLowerCase().includes(keyword)
      )
    return array;
}