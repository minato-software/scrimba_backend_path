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