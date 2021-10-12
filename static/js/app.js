const tableData = data; // from data.js
var tbody = d3.select("tbody"); // get table references

function buildTable(data) {
  tbody.html("");  // clear out any existing data

  // loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    let row = tbody.append("tr"); // Append a row to the table body

    // loop through each field in the dataRow 
    // and add each value as a table cell
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


var filters = {}; // to keep track of all the filters as an object

function updateFilters() {
  let changedElement = d3.select(this); // element that was changed as a variable
  let elementValue = changedElement.property("value");  // value that was changed as a variable
  let filterId = changedElement.attr("id");  // id of the filter that was changed as a variable

  // if a filter value was entered - add filterId and value
  // otherwise delete that filter from filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  } else {
    delete filters[filterId];
  }
  
  filterTable();
  }
  
  function filterTable() {
    let filteredData = tableData;  // set the filtered data to the tableData
  
    // loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key,value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    })
  
    buildTable(filteredData);  // rebuild the table using the filtered data
  }
  
  d3.selectAll("input").on("change", updateFilters); // event to listen for changes to each filter
  buildTable(tableData); // build the table when the page loads
