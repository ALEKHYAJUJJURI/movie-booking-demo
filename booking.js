function displayBooking(){
    document.getElementById('movieD').innerHTML = document.getElementById('title').value;
    document.getElementById('dateD').innerHTML = document.getElementById('date').value;
    document.getElementById('timeD').innerHTML = document.getElementById('timing').value;
    document.getElementById('seatsD').innerHTML = document.getElementById('seats').value;
    if( document.getElementById('title').value=='Devara'){
        document.getElementById('img').src="images/devera.jpg"
    }
    else{
        document.getElementById('img').src="images/mattu_vadalara.jpg"
    }
     document.getElementById('quickBtn').style.display='block'
     document.getElementById('quickDis').style.display="none"
}
