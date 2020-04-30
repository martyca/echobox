# echobox
ExpressJS container that repeats what you say.

## Purpose
Returns any http call through pure json when using curl, or html when using a browser.
echo's back:
- Method
- Headers
- Host
- Path
- Query parameters
- Post or Put data

## Versions
- martyca/alpinenodejs 1.0
- ExpressJS 4.17.1
- NodeJS 12.15.0
- NPM 6.13.4

## References
### AlpineNodeJS
https://hub.docker.com/repository/docker/martyca/alpinenodejs
### ExpressJS
https://expressjs.com
### NodeJS
https://nodejs.org
### NPM
https://www.npmjs.com

## Instructions
### Run
`docker run -d -p 8080:8080 martyca/echobox`
### Test
`curl -s -X PUT -d "foo=bar" \-H "Accept: application/json" "localhost:8080/foo/bar?foo=bar&baz=qux" | jq .`
### Result
```javascript
{
  "Method": "PUT",
  "Headers": {
    "host": "localhost:8080",
    "user-agent": "curl/7.54.0",
    "accept": "application/json",
    "content-length": "7",
    "content-type": "application/x-www-form-urlencoded"
  },
  "Host": "localhost",
  "Path": "/foo/bar",
  "Queries": {
    "foo": "bar",
    "baz": "qux"
  },
  "data": {
    "foo": "bar"
  }
}
```
