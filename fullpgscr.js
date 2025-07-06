$(document).ready(function(){
  new WOW().init();
$("#fullpage").fullpage({
  scrollBar: true,
  navigation: true,
  navigationTooltips: ["Кабо Верде", "Молуккские острова", 
"Азорские острова", "Мальдивские острова", "Фолклендские острова", 
"Марианские острова", "Маршалловы острова", "Гавайские острова", "Галапагосские острова"],
  loopBottom: true,
  sectionSelector: "section",
});

// int = -1;
// color_array = [
//     "ffffff",
//     "000000",
// ];
// $("section").each(function(){
//   int++;
//   $(this)
//   .addClass("grid-item-" + int)
//   .css("background-color", color_array[int]);
// });

});
