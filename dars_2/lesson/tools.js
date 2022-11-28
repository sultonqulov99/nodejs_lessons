const fileStructure = [
    {
        src: [
            {
                moduls: [
                    'user.js',
                    'model.js'
                ]
            },
            {
                controller: [
                    'user1.js',
                    'model1.js'
                ]
            },
            {
                routers: [
                    'user2.js',
                    'model2.js'
                ]
            },
        ]
    },
    'config.js',
    '.env'
]
const fs = require('fs')
const path = require('path')
for (let i = 1; i < Object.keys(fileStructure[0]).length; i++) {
fs.mkdirSync(Object.keys(fileStructure[0])[i])
}
for (let i = 0; i < Object.keys(fileStructure).length; i++) {
    if(Object.values(fileStructure[i]).includes('.')){
        fs.writeFileSync(fileStructure[i], '')
    }
    else{
        fs.mkdirSync(Object.keys(fileStructure[i])[0])
    }
}
for (let i = 0; i < Object.keys(fileStructure[0]['src']).length; i++) {
    if(Object.values(fileStructure[0]['src'][i]).includes('.')){
        fs.writeFileSync(path.join(__dirname,'src',fileStructure[0]['src'][i], ''))
    }
    else {
        fs.mkdirSync(path.join(__dirname,'src',Object.keys(fileStructure[0]['src'][i])[0]))
    }
}
for (let i = 0; i < Object.keys(fileStructure[0]['src']).length; i++) {
    for (let j = 0; j < fileStructure[0]['src'][i][Object.keys(fileStructure[0]['src'][i])[0]].length; j++) {
        if (fileStructure[0]['src'][i][Object.keys(fileStructure[0]['src'][i])[0]][j].split('').includes('.')) {
            let a = Object.keys(fileStructure[0]['src'][i])[0]
            let aa = fileStructure[0]['src'][i][Object.keys(fileStructure[0]['src'][i])[0]][j]
            fs.writeFileSync(`src/${a}/${aa}`, '')
        }
        else {
            fs.mkdirSync(path.join(__dirname,'src',Object.keys(fileStructure[0]['src'][i])[0],fileStructure[0]['src'][i][Object.keys(fileStructure[0]['src'][i])[0]][j]))
        }
    }
}


