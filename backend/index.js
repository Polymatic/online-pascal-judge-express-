const interpreteScript = require('./execute')
const languages = require('./availableLanguages')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/code_run', (req, res) => {
	const language = req.body.language
	const script = req.body.script
	interpreteScript(res, script, language)
})

app.get('/languages', (req, res) => {
    	res.json(languages)
})

const PORT = 3002
app.listen(PORT, () => {
  	console.log(`Server running on port ${PORT}`)
})
