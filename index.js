const express = require('express')
const app = express()
const port = 3000
KMS
Credential
KMS
KMS
Credential
CredentialKMS
CredentialKMS
CredentialKMS
Credential
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
