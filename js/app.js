const tableData = data; // import data from data.js

var tbody = d3.select("tbody")  // references the HTML table using d3

function buildTable(data) {
    tbody.html(""); // clears table data so user can choose query to build new table
    
    // go through all object in data add a row+cells for each value in row
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); // find <tbody> tag and add table row
        
        //  go through fields in dataRow and add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val); 
        });
    });
}

function handleClick() {
    // get the datetime value from filter
    let date = d3.select("#datetime").property("value"); 
    let filteredData = tableData;
    // see if a date was entered - if so filter data using date
    if (date) { 
        // keep only rows where datetime matches filter
        filteredData = filteredData.filter(row => row.datetime === date);
    
        // rebuild table with filtered data
        buildTable(filteredData); // if no date entered, then original table displayed
    };
}

d3.selectAll("#filter-btn").on("click", handleClick); // call handleClick after mouse click
buildTable(tableData); // display original table
