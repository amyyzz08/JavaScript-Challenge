// from data.js
var tableData = data;

// Using D3 to select table body
var tbody= d3.select("tbody");

// Append Data into the table
tableData.forEach(line => {
    var row = tbody.append("tr");
    Object.entries(line).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});


// Selecting form and button using d3
var form=d3.select("form");

var button=d3.select("#filter-btn");

// Creating event handlers
form.on("sumbit", enter);

button.on("click", enter);


// Function will append filtered data into table based on user input
function enter() {
    
    // Stops page from refreshing
    d3.event.preventDefault();

    // Clears the previous table data
    tbody.html("");

    var inputDate= d3.select("#datetime")
    var inputValue=inputDate.property("value");
    
    var filteredData= tableData.filter(function (result) {
        if (inputValue === result.datetime) {
            
            var filteredrow= tbody.append("tr");
            Object.entries(result).forEach(function ([key, value]) {
                var filteredcell= filteredrow.append("td");
                filteredcell.text(value);
                filteredcell.exit().remove();
                filteredcell.enter().append("td");
            });
        };
    });
};
   




 






