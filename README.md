# echobox
ExpressJS container that repeats what you say.

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
![Curl output](https://raw.githubusercontent.com/martyca/echobox/master/img/output.png)
