function getWeatherStationData(){
  $.ajax({url: "https://apex.oracle.com/pls/apex/raspberrypi/weatherstation/getlatestmeasurements/490722",
  success: function(result){
    var items = result.items;
    var ambient_temp = items[0].ambient_temp;
    var wind_speed = items[0].wind_speed;
    var humidity = items[0].humidity;
    var air_quality = items[0].air_quality;
    var air_pressure = items[0].air_pressure;
    var ambient_temp = items[0].ambient_temp;
    var ground_temp = items[0].ground_temp

    $("#tempData").html( ambient_temp);
    $("#windData").html( wind_speed);
    $('#ambient_tempData').html(ambient_temp);
    $('#ground_tempData').html(ground_temp);
    $('#humidityData').html(humidity);
    $("#air_qualityData").html(air_quality);
    $('#air_pressureData').html(air_pressure);
    $("#headingParagraph").html(items[0].created_by);

    console.log('Humidity '+humidity,'        Air Pressure '+ air_pressure)

   }});
setTimeout(function(){ getWeatherStationData(); }, 5000)
}

$(document).ready(function(){
      getWeatherStationData();
});
