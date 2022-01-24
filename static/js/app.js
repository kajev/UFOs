// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
//1
var filters = {};

function updateFilters() {
    // 4a
    let changedElement  = d3.select(this);

    let elementValue = changedElement.property("value");
    console.log(elementValue);

    let filteredId = changedElement.attr("id");
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (elementValue) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filters[filterId] = elementValue;
    }
    else{
        delete filters[filterId];
    };
  
    // 6
    filterTable();
  }
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filteredData = tableData;
    
  
    // 9. Loop through all of the filters, keep any data that matches
    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    };

    if (city) {
        filteredData = filteredData.filter(row => row.city === city);
    };

    if (state) {
        filteredData = filteredData.filter(row => row.state === state);
    };

    if (country) {
        filteredData = filteredData.filter(row => row.country === country);
    };

    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape);
    };
    
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    
  }
// Attach an event to listen for the form button
d3.selectAll("input").on("change", filterTable);

// Build the table when the page loads
buildTable(tableData);