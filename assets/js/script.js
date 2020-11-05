var search_box = document.querySelector('#search-box');
search_box.addEventListener('keyup', function() {
    let search_key = search_box.value
    var url = 'https://raw.githubusercontent.com/ozlerhakan/mongodb-json-files/master/datasets/restaurant.json';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status == 200) {
            var response = JSON.stringify(this.responseText);
            // response = JSON.parse(response)
            // response = JSON.parse(response);
            // response.forEach(element => {
            //     if (response.name.includes(search_key)) {
            //         display_search(element);
            //     }
            // });
            // console.log(response[100]);
            // console.log(search_key);
            console.log(response[0]);
            // for (var key in response) {
            //     console.log(response[key])
            // }
        }
    }
    xhr.open('GET', url);
    xhr.send();
})