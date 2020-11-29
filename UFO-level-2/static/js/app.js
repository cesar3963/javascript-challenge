// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");

button.on("click", function(){
    tbody.html("");

    d3.event.preventDefault();

    var inputElement = d3.select("#entry");
    
    var inputvalue = inputElement.property("value");

    console.log(inputvalue);
  

    var filteredData = tableData.filter(ufo => ufo.datetime === inputvalue||
                                                ufo.city === inputvalue||
                                                ufo.state === inputvalue||
                                                ufo.country === inputvalue||
                                                ufo.shape === inputvalue);

    console.log(filteredData); 

    filteredData.forEach(function(UfoData) {
        var row = tbody.append("tr");
    
        Object.entries(UfoData).forEach(function([key,value]){
            var cell = row.append("td");
            cell.text(value);
    
            
        });
    });
});