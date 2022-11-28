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

function fileRender (fileStructure,filePath =__dirname){
    for (const el of fileStructure) {
        if(typeof el == 'object' && !Array.isArray(el)){
            const folderName = Object.keys(el)[0]
            const folderPath = path.join(filePath,folderName)
            fs.mkdirSync(folderPath)
            fileRender(el[folderName],folderPath)
        }
        if(typeof el == 'string'){
            fs.writeFileSync(path.join(filePath,el),'')
        }
    }
}
fileRender(fileStructure)