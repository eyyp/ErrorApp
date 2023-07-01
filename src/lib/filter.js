import React from "react";
export const filter = (array,keyword) => {
    array = array.filter(item =>
        item.title.toLowerCase().includes(keyword) ||
        item.companyName.toLowerCase().includes(keyword) 
      )
    return array;
}