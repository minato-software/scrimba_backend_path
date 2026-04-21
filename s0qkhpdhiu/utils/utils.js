export function sendJSON(res, statusCode, data) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = statusCode
    res.end(JSON.stringify(data))
}

export function destinationFilter(dataArray, propertyName, targetValue) {
    return dataArray.filter((item) => {
        if (!item[propertyName]) {
            return false;
        }

        return item[propertyName].toLowerCase() === targetValue.toLowerCase();
    });
}

export function filterByQueryParams(destinations, queryObj) {

    if (Object.keys(queryObj).length === 0) {
        return destinations;
    }

    return destinations.filter((item) => {
        let isMatch = true;

        if(queryObj.continent && item.continent.toLowerCase() !== queryObj.continent.toLowerCase()) {
            isMatch = false;
        }

        if(queryObj.country && item.country.toLowerCase() !== queryObj.country.toLowerCase()) {
            isMatch = false;
        }

        if (queryObj.is_open_to_public) {
            // queryObj.is_open_to_public is the STRING "true" or "false"
            // - must convert to a real boolean to match
            const requestedStatus = queryObj.is_open_to_public === 'true';
            if (item.is_open_to_public !== requestedStatus) {
                isMatch = false;
            }
        }
        return isMatch;
    });
}