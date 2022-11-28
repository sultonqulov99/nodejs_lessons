
// //const main = document.querySelector('.main')
// const mainHeaders= document.querySelector('.main-headers')
// const customer = document.querySelector('.customer-item')
// const customerList = document.querySelector('.customers-list')
// const button = document.querySelector('button')
// let clientId = 0
// button.addEventListener('click', ()=>{
//     if(usernameInput.value.length < 15 && usernameInput.value.trim() != "" &&
//         telephoneInput.value.length == 13 && telephoneInput.value[0] == '+' && 
//         telephoneInput.value[1] == 9 && telephoneInput.value[2] == 9 &&
//         telephoneInput.value[3] == 8){
//             let li = document.createElement('li')
//             let span = document.createElement('span')
//             let a = document.createElement('a')
//             li.classList.add('customer-item')
//             span.classList.add('customer-name')
//             a.classList.add('customer-phone')
//             span.append(usernameInput.value)
//             a.append(telephoneInput.value)
//             li.append(span)
//             li.append(a)
//             customerList.append(li)
//             clientId++
//     }
//     else{
//         alert('Malumot xato')
//     }

// })
// const li = document.querySelector('.customer-item')
// customerList.addEventListener('click', ()=>{
//     mainHeaders.innerHTML = null
//     let cutomerIdWrapper = document.createElement('div')
//     let span1 = document.createElement('span')
//     let span2 = document.createElement('span')
//     let h1 = document.createElement('h1')
//     cutomerIdWrapper.className = 'cutomer-id-wrapper'
//     span2.id = 'clientId'
//     h1.id = 'userHeader'
//     h1.className = 'customer-name'
//     span1.textContent = 'client id:'
//     span2.textContent = clientId
//     h1.textContent = usernameInput.value

//     cutomerIdWrapper.append(span1,span2)
//     mainHeaders.append(cutomerIdWrapper,h1)

// })
// const mainOrders = document.querySelector('.main-orders')
// const ordersList = document.querySelector('.orders-list')
// const mainFooter = document.querySelector('.main-footer')

// let form = document.createElement('form')
// let select = document.createElement('select')
// let optionC = document.createElement('option')
// let optionF = document.createElement('option')
// let optionB = document.createElement('option')
// let optionCH = document.createElement('option')
// let optionCO = document.createElement('option')
// let optionS = document.createElement('option')
// let input = document.createElement('input')
// let btn = document.createElement('button')
// let imgIcon = document.createElement('img')
// btn.type="button"
// imgIcon.src = "https://img.icons8.com/plasticine/100/000000/plus-math.png"
// btn.append(imgIcon)
// input.id = 'foodsCount'
// input.type = 'number'
// input.placeholder = 'count'
// form.id = 'foodsForm'
// select.id = 'foodsSelect'
// optionC.textContent = 'cola'
// optionF.textContent = 'fanta'
// optionB.textContent = 'burger_cheese'
// optionCH.textContent = 'chicken_wings'
// optionCO.textContent = 'combo'
// optionS.textContent = 'spinner'

//     select.append(optionC,optionF,optionB,optionCH,optionCO,optionS)
//     form.append(select)  
//     form.append(input,btn)
//     mainFooter.append(form)


// btn.addEventListener('click', ()=>{
//     let li = document.createElement('li')
//     let div = document.createElement('div')
//     let span1 = document.createElement('span')
//     let span2 = document.createElement('span')
//     let img = document.createElement('img')
    
//     li.className = 'order-item'
//     span1.className = 'order-name'
//     span2.className = 'order-count'
//     span1.textContent = foodsSelect.value
//     span2.textContent = foodsCount.value
//     img.src = `./img/${foodsSelect.value}.jpeg`

//     div.append(span1,span2)
//     li.append(img,div)
//     ordersList.append(li)
//     mainOrders.append(ordersList)
// })

const customersList = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const ordersList = document.querySelector('.orders-list')
const clientId = document.querySelector('#clientId')
const customerName = document.querySelector('.customer-name')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector('#usernameInput')
const telephoneInput = document.querySelector('#telephoneInput')
const foodsForm = document.querySelector('#foodsForm')
const foodsCount = document.querySelector('#foodsCount')

function renderUsers(){
    customersList.innerHTML = null
    for (let user of users) {
        const [li,span,a] = createElements('li','span','a') 
        li.classList.add("customer-item")
        span.classList.add("customer-name")
        a.classList.add("customer-phone")
        a.setAttribute('href', 'tel:+' + user.contact)
        span.textContent = user.username
        a.textContent = '+' + user.contact
        li.append(span,a)
        customersList.append(li)
        li.addEventListener('click', event =>{
            customerName.textContent = user.username
            clientId.textContent = user.userId

            window.localStorage.getItem('userId', user.userId)
            window.localStorage.getItem('username', user.username)

            renderOrders(user.userId)
        })
    }
}
function renderFoods(){

    for (let food of foods) {
        const [option] = createElements('option') 
        option.value = food.foodId
        option.textContent = food.foodName
        foodsSelect.append(option)
    }
}

function renderOrders(userId){
    
    if(!userId) return

    ordersList.innerHTML = null
    for (let order of orders) {
        if(!(order.userId == userId)) continue
        const food = foods.find(el => el.foodId == order.foodId)
        const [liEl,imgEl,divEl,nameEl,countEl] = createElements('li','img','div','span','span') 

        liEl.classList.add("order-item")
        nameEl.classList.add("order-name")
        countEl.classList.add("order-count")

        imgEl.setAttribute('src',food.foodImg)
        nameEl.textContent = food.foodName
        countEl.textContent = order.count
        console.log(food.count);

        divEl.append(nameEl,countEl)
        liEl.append(imgEl,divEl)
        ordersList.append(liEl)
    }
}
function addUser(event){
    event.preventDefault()
    const username = usernameInput.value.trim()
    const contact = telephoneInput.value.trim()
    if(!username || username.length > 30){
        return alert('Invalid username!')
    }
    if(!(/^998(9[0123456789|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)){
        return alert('Invalid contact!')
    }
    const newUser ={
        userId : users.length ? users[users.length - 1].userId + 1 : 1,
        username,
        contact
    }
    users.push(newUser)
    window.localStorage.setItem('users',JSON.stringify(users))
    return renderUsers()
}
function addOrder(event){
    event.preventDefault()

    const foodId = foodsSelect.value.trim()
    const count = foodsCount.value
    const userId = clientId.textContent.trim()

    let order = orders.find(el => el.foodId == foodId && el.userId == userId)
    if(
        !count ||
        +count > 10 || 
        !userId
    )return

    if(order){
        order.count = +count + +order.count
    }
    else{
        const order = {foodId,userId,count}
        orders.push(order)

    }
    window.localStorage.setItem('orders', JSON.stringify(orders))
    return renderOrders(userId)
}

const userId = window.localStorage.getItem('userId')
const username = window.localStorage.getItem('username')

userId && (clientId.textContent = userId)
username && (customerName.textContent = username)

renderUsers()
renderFoods()
renderOrders(userId)

userAdd.addEventListener('submit',addUser)
foodsForm.addEventListener('submit',addOrder)   
