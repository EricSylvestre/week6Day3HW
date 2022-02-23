// apiKey = 64e8744e103efa2e5d60216db69d071d
// apiCall = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


$('#api_button').click(function(){
    var user_search = $('#search').val()
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${user_search}&appid=64e8744e103efa2e5d60216db69d071d`, function(d){
        // console.log(d);
        $('#high').html(Math.trunc(((d.main.temp_max - 273.15) * 1.8) + 32) +' F');
        $('#low').html(Math.trunc(((d.main.temp_min - 273.15) * 1.8) + 32) + ' F');
        $('#forecast').html(d.weather[0].description);
        $('#humidity').html(d.main.humidity + ' %');
        $('#city').html(user_search);
        
    });
});













