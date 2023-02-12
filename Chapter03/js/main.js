function initialize() {
	cities();
};
//creating a variable that holds array named cityPop. cityPop  is an array containing city and population data
function cities() {
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
	//create a table element
	var table = document.createElement("table");

	//create a header row element and append it to the table
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);

	//create city and population column headers
	headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>")

	//loop to add a new row for each city
	cityPop.forEach(function (cityObject) {

		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend', rowHtml);
	})

	//append the table element to the div. (without this line table doesnt show up)
	document.querySelector("#mydiv").appendChild(table);

	addColumns(cityPop);
	addEvents();
}

function addColumns(cityPop) {
	
	document.querySelectorAll("tr").forEach(function (row, i) {

		if (i == 0) {

			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
			


		} else {

			var citySize;

			if (cityPop[i - 1].population < 100000) {
				citySize = 'Small';

			} else if (cityPop[i - 1].population < 500000) {
				citySize = 'Medium';

			} else {
				citySize = 'Large';
			};

			//add new table cell w the city size
			var newRow = document.createElement('td')
			newRow.innerHTML = citySize
			//assign city size cell to table
			row.appendChild(newRow)
			//SHOULD This be in the code? its not in the solution? it does not change anything in live server
			//row.insertAdjacentHTML = '<td>' + citySize + '</td>';
		};
	});
};
// addEvent function sets up a color change to occur when the mouse hovers over the table
//"select" an element (table) and add "event" of color change
function addEvents() {

	table = document.querySelector("table")

	document.querySelector("table").addEventListener("mouseover", function () {
		//rgb(255,255,255)
		var color = "rgb(";

		for (var i = 0; i < 3; i++) {

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i < 2) {
				color += ",";

			} else {
				color += ")";
			};

			//this is in the OG code, not the solution? is it the eqivilent to the line below?
			//document.querySelector("table").color = color;
		}
		table.style.color = color;
	});
	//clickme function 
	//similar to the color change function in that you create a function, decide what you want it to do, and use querySelector to select element, and eventListener to determine what will happenn
	function clickme() {

		alert('Hey, you clicked me!');
	};

	table.addEventListener("click", clickme)
};
document.addEventListener('DOMContentLoaded', initialize);

//chapter 3 start

function debugAjax(){
	//use fetch to retrieve data
	fetch("data/map.geojson")
		.then(function(response){
			console.log(response);
			//convert data to usble form 
			return response.json();
		})
		//send retrieved data
		.then(function(response){
		const myData=JSON.stringify(response)
		//append json information to my div element
		document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(response))
		});
};
//tell document to load function
document.addEventListener('DOMContentLoaded', debugAjax);
