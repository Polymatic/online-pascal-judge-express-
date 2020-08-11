const {spawn} = require('child_process');

const interpreteScript = (res, script, language) => {
  console.log(script)
  var dataToSend
  const returnObject = {stdout: "", stderr: ""}

  DIR = `./languages/${language}/interpreter.py`

  const python = spawn('python3', [DIR, script])
  
  python.stderr.on('data', function (data) {
    console.log('stderr:-------------------------------------', data.toString());
    // dataToSend = data.toString();
    returnObject.stderr = data.toString()
    returnObject.stdout = ""
   })

  python.stdout.on('data', function (data) {
    console.log('stdout:', data.toString());
    // dataToSend = data.toString();
    returnObject.stdout = data.toString()
   })

  python.on('close', (code) => {
     console.log(`child process close all stdio with code ${code}`);
     // console.log('inside runPythonScript func',dataToSend)

     res.json(returnObject)
     });
}

module.exports = interpreteScript