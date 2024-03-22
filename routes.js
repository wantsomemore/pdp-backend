const fs = require('fs')

const reqHandler = (req, res) => {
  const url = req.url
  const method = req.method

  if(url === '/'){
    res.write('<html><title>Tessss page</title><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form><div>Info</div></html>')
   return res.end()
  }
  
  if(url === '/message' && req.method === 'POST') {
    const body = []
    console.log(body)
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    } )
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        console.log(err)
        res.statusCode = 302
        // res.setHeader('Location', '/')
        return res.end()
      })
      res.setHeader('Content-Type', 'text/html')
      res.write('<html><title>Test page</title><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form><div>In</div></html>')
      res.end()
  
    })
   
  }
}

module.exports = {routes: reqHandler}