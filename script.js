var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].flag);
  }
  // 3.Use the same rest countries and print all countries name, region, sub region and population
  for (var j = 0; j < data.length; j++) {
    console.log(
      `countryname:${data[j].name} region:${data[j].region} subregion:${data[j].subregion} population:${data[j].population}`
    );
  }
};
console.log("Hello World");
