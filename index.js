class spoofysearch {
/**
 * Generates a full URL string given a query string and a city to simulate the search in
 * @param {string} search Search string
 * @param {*} location Canoical name (Ex. New York City, New York, USA or Amarillo, TX, USA)
 * @returns {string} A URL like https://www.google.com/search?q=Pizza&uule=w+CAIQICIhTGFmYXlldHRlLExvdWlzaWFuYSxVbml0ZWQgU3RhdGVz
 */
static query_string(search, location) {
    
    // Construct the url
    var url = "https://www.google.com/search";
    url += "?q=" + encodeURIComponent(search); // Add the URL encoded search query
    url += "&uule=w+CAIQICI"; // Tell google to spoof from Canonical name
    url += this.place_prefix(location);
    url += Buffer.from(location).toString('base64')
    
    // Sometimes the string will end with an extraneous ==,
    // so remove that if it exists
    if(url.endsWith("==")) {
        url = url.substring(0, url.length - 2);
    }

    return url;

}

/**
 * (Utility function) returns a place_prefix which is a sort-of secret ingredient of Google SEO urls.
 * This is exported so that Mocha can test it. You should never need it. See the query_string function instead
 * @param {string} location Canoical name (Ex. New York City, New York, USA or Amarillo, TX, USA)
 * @returns {string} A single character (or empty) to be inserted into the search URL
 */
static place_prefix(location) {
    var prefixes = [
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '-', '',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
    ]
    if(location.length < 4) {
        throw new Error("Place name must be at least four characters long.");
    } else if(location.length == 63) {
        throw new Error("Due to a pesky bug, place names cannot be 63 characters long.")
    } else if(location.length > 73) {
        throw new Error("Place names can be no more than 73 characters.")
    } else {
        return prefixes[location.length - 4];
    }
}
}

module.exports = spoofysearch;