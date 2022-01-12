let url = "https://developerfunnel.herokuapp.com/location"
let hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')  
            let text = document.createTextNode(data[i].city_name) 
            element.appendChild(text) 
            element.value = data[i]._id 
            document.getElementById('city').appendChild(element)
            
        }
    })
}

const getHotel = () => {
    const cityId = document.getElementById('city').value;
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`${hotelUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(`${data[i].name} | ${data[i].city_name}`)
            element.appendChild(text)
            document.getElementById('hotels').appendChild(element)
        }
    })
}


function test(){
    document.getElementById('coupon').style.visibility="visible"
}

function closeDiv(){
    document.getElementById('coupon').style.visibility="hidden"
}

function changeColor(color){
    if(color == 'red'){
        document.getElementById('coupon').style.backgroundColor="red"
    }else if(color == 'green')(
        document.getElementById('coupon').style.backgroundColor="green"
    )
    
}