## Motivation

Automatically test Google queries pretending to be from any location. Helpful for webscraping, SEO testing, etc.

## Installing
`npm install --save spoofysearch`

## Usage
SpoofySearch returns the **URL** used to perform a search as if you were in the location. 

You will have to make the actual HTTP request yourself 

``` javascript
url = spoofysearch.query_string("live music", "Asheville, North Carolina") 
// url = https://www.google.com/search?q=live%20music&uule=w+CAIQICIZQXNoZXZpbGxlLCBOb3J0aCBDYXJvbGluYQ
```
