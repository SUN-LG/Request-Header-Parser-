const express = require("express")
const app = express()


app.set('port', process.env.PORT || 5000)
app.set('trust proxy', true)
app.use(express.static(__dirname + '/public'))


app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip
  const language = req.get('Accept-Language').split(',')[0]
  const software = req.get('User-Agent').match(/\((.*;.*;.*\d)\)\s/)[1]

  res.json({
    ipaddress,
    language,
    software
  })
})


app.listen(app.get('port'), () => {
  console.log('Header-Parser working at port:', app.get('port'))
})
