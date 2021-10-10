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