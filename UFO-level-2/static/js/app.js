// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// tableData.forEach(function(UfoData) {
//     var row = tbody.append("tr");

//     Object.entries(UfoData).forEach(function([key,value]){
//         var cell = row.append("td");
//         cell.text(value);

        
//     });
// });

var button = d3.select("#filter-btn");

button.on("click", function(){
    tbody.html("");

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    
    var inputvalue = inputElement.property("value");

    console.log(inputvalue);
  

    var filteredData = tableData.filter(ufo => ufo.datetime === inputvalue);

    console.log(filteredData); 

    filteredData.forEach(function(UfoData) {
        var row = tbody.append("tr");
    
        Object.entries(UfoData).forEach(function([key,value]){
            var cell = row.append("td");
            cell.text(value);
    
            
        });
    });
});