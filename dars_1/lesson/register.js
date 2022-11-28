const fs = require('fs/promises')
const [,, username] = process.argv

!async function () {
    let users = await fs.readFile('./database/users.json')
    users = JSON.parse(users) || []

    users.push({ username })
    await fs.writeFile('./database/users.json', JSON.stringify(users,null,4))
    console.table('> user successfully registered!');
}()