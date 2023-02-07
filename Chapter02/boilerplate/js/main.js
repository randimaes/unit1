//initialize function called when the script loads
function initialize() {
    cities();
};

//function to create a table with cities and their populations
function cities() {
    //define an array of objects for cities and population
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];


    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    //for (var i = 0; i < cities.length; i++){
    //var tr = document.createElement("tr");

    //var city = document.createElement("td");
    //city.innerHTML = cities[i];
    //tr.appendChild(city);

    //var pop = document.createElement("td");
    //pop.innerHTML = population[i];
    //tr.appendChild(pop);

    //table.appendChild(tr);
    //};

    //Example 2.4 line 25...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++) {
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        //first conditional block
        if (cityPop[i].city == 'Madison') {
            city.innerHTML = 'Badgerville';
        } else if (cityPop[i].city == 'Green Bay') {
            city.innerHTML = 'Packerville';
        } else {
            city.innerHTML = cityPop[i].city;
        }

        tr.appendChild(city);

        var pop = document.createElement("td");
        //second conditional block        
        if (cityPop[i].population < 500000) {
            pop.innerHTML = cityPop[i].population;
        } else {
            pop.innerHTML = 'Too big!';
        };

        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var myDiv = document.querySelector("#myDiv");
    myDiv.appendChild(table);
};

//call the initialize function when the window has loaded
window.onload = initialize();
