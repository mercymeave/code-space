const phoneNumber= document.getElementById('number'),
textMessage = document.getElementById('message'),
scheduleSelect = document.getElementById('schedule'),
button = document.getElementById('button'),
response = document.querySelector(".response");


button.addEventListener('click', send, false)

const socket = io();
socket.on('smsStatus', function(data){
    if(data.error){
		response.innerHTML = '<strong>Success!</strong><h5>Text message sent to ' + data.error + '</h5>';
  	}else{
    	response.innerHTML = '<h5>Text message sent to ' + data.number + '</h5>';
  	}
});

function send() {
    const number = phoneNumber.value.replace(/\D/g, '');
    const text = textMessage.value;
    
    fetch('/', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ number, text })
    }).then(function (res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });
}