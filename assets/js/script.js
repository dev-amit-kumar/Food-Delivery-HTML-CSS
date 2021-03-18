var search_box = document.querySelector('#search-box');
var search_div = document.querySelector('#search_div');
var match_list = document.querySelector('#match-list');
var option_rest = document.querySelector('#match-list');
var response = '';

search_box.addEventListener('keyup', function () {
	var search_key = search_box.value.toLowerCase();
	var url =
		'https://raw.githubusercontent.com/amit-kumar-au9/JSON/main/restraunt.json';
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status == 200) {
			response = JSON.parse(this.responseText);
			match_list.innerHTML = '';
			search_div.style.top = '30%';
			for (var i = 0; i <= 15; i++) {
				var element = response[i];
				var name = element.name.toLowerCase();
				if (name.includes(search_key) && search_key) {
					showName(element);
				}
			}
		}
	};
	xhr.open('GET', url);
	xhr.send();
});

option_rest.addEventListener('click', function (event) {
	console.dir(event.target.value);
	response.forEach((element) => {
		if (element._id.$oid === event.target.value) {
			ShowRestaurants(element);
		}
	});
});

function showName(data) {
	var option = document.createElement('option');
	option.innerText = data.name;
	option.id = 'option_rest';
	option.value = data._id.$oid;
	match_list.appendChild(option);
}

var restraurant_name = document.querySelector('#restraurant_name');
var restraurant_address = document.querySelector('#restraurant_address');
var restraurant_rating = document.querySelector('#restraurant_rating');
var restraurant_type = document.querySelector('#restraurant_type');
var restaurants_data = document.querySelector('.restaurants-data');
var close_btn = document.querySelector('#close_btn');

function ShowRestaurants(data) {
	restraurant_name.innerHTML = data.name;
	restraurant_rating.innerHTML = data.rating;
	restraurant_address.innerHTML = data.address;
	restraurant_type.innerHTML = data.type_of_food;
	restaurants_data.style.display = 'block';
	search_box.value = '';
	match_list.innerHTML = '';
	search_div.style.top = '50%';
}

close_btn.addEventListener('click', function () {
	restaurants_data.style.display = 'none';
});
