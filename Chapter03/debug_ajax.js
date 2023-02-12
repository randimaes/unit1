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

