const fs = require('fs/promises')
const [,,flag]= process.argv


!async function () {
    let income = await fs.readFile('database/income.json')
    let expanse = await fs.readFile('database/expanse.json')
    income = JSON.parse(income) || []
    expanse = JSON.parse(expanse) || []

    incomeTotal = income.reduce((acc,el) => acc + +el.amount,0)
    expanseTotal = expanse.reduce((acc,el) => acc + +el.amount,0)
    total = incomeTotal - expanseTotal

    if(flag && flag !== '--more'){
        return console.log('invalid');
    }
    if(flag == undefined) {
        console.log('> Total balans');
        return console.table([{
            "total income":incomeTotal +'$',
            "total expanse":expanseTotal +'$',
            "total" :total +'$'
        }])
    }

        let income1 = await fs.readFile('database/income.json', 'utf-8')
        let expanse1 = await fs.readFile('database/expanse.json', 'utf-8')
        console.log('> Total info');
        console.table([{
            "total income":incomeTotal +'$',
            "total expanse":expanseTotal +'$',
            "total" :total +'$'
        }])
        console.log('> Income info');
        console.table(JSON.parse(income1).map((el) =>  {
            return {id:el.id, amount: el.amount + "$",purpose:el.purpose,date:el.date}
        }))

        console.log('> Expanse info');
        console.table(JSON.parse(expanse1).map((el) =>  {
            return {id:el.id, amount: el.amount + "$",purpose:el.purpose,date:el.date}
        }))
}()

