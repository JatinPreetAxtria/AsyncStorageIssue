import React from 'react';
import Config from 'react-native-config';



export function paramsToBody(params) {
    if (!params || params.length < 1) {
        console.log("response : empty params");
        return null;
    }
    const body = new FormData();
    for (let k in params) {
        body.append(k, params[k]);
    }

    l("Params: ", JSON.stringify(body));
    return body;
}

export function merge(...parts) {
    let response = "";
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].trim().length > 0) {
            response = response + parts[i] + " ";
        }
    }
    return response;
}

export const MmmMonthMap = {
    "Jan": 0, "Feb": 1, "Mar": 2,
    "Apr": 3, "May": 4, "Jun": 5,
    "Jul": 6, "Aug": 7, "Sep": 8,
    "Oct": 9, "Nov": 10, "Dec": 11
};

export const MmmmMonthMap = {
    "January": 0, "February": 1, "March": 2,
    "April": 3, "May": 4, "June": 5,
    "July": 6, "August": 7, "September": 8,
    "October": 9, "November": 10, "December": 11
};