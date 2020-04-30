const express = require('express')
const port = 8080
const bodyParser = require('body-parser')
const app = express()

function createJSONResponse(requestObject) {
	let response = {}
	response.Method  = requestObject.method
	response.Headers = requestObject.headers
	response.Host    = requestObject.host
	response.Path    = requestObject.path
	response.Queries = requestObject.query
	response.data    = requestObject.body
	return response
}

function createHTMLResponse(requestObject) {
	let response = ""
	response = response + '<h4>Method:</h4>\n'
	response = response + requestObject.method + '\n'
	response = response + '<h4>Headers:</h4>\n'
	for (header in requestObject.headers){
		response = 	response + 
								'<b>' +
								header +
								'</b>' +
								' = ' +
								requestObject.headers[header] + 
								'<br>\n'
	}
	response = response + '<h4>Host:</h4>\n'
	response = response + requestObject.host + '\n'
	response = response + '<h4>Path:</h4>\n'
	response = response + requestObject.path + '\n'
	response = response + '<h4>Queries:</h4>\n'
	for (query in requestObject.query){
		response = 	response + 
								'<b>' +
								query +
								'</b>' +
								' = ' +
								requestObject.query[query] + 
								'<br>\n'
	}
	response = response + '<h4>Data:</h4>\n'
	response = response + JSON.stringify(requestObject.body) + '\n'
	return response
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.all('*', function ( req, res ) {
	if (req.headers["user-agent"].toLowerCase().includes("curl")) {
		let response = createJSONResponse(req)
		res.send(response)
	} else {
		let response = createHTMLResponse(req)
		res.send(response)
	}
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
