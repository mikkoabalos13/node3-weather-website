const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const loadingMsg = document.querySelector('#loading')

// messageOne.textContent = 'From javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const fetchUrl = 'http://localhost:3000/weather?address=' + encodeURIComponent(location)
    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch(fetchUrl).then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            console.log(data.location)
            console.log(data.forecast)
            }
        })
})
})