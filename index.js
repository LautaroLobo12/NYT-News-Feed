let request = new XMLHttpRequest();

request.open('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2YXK1ZQmRH4CfnOK4BfUQy8lFHricjVm');

request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(request.response);

    console.log(data);
    let start = document.getElementById('news');

    for (let i = 0; i < data.results.length; i++) {

        let title = data.results[i].title;
        let abstract = data.results[i].abstract;
        let url = data.results[i].url;
        let published_date = data.results[i].published_date;
        let byline = data.results[i].byline;

        let array = [title, abstract, url, published_date, byline];

        let card = document.createElement('div');
        card.setAttribute('class', 'card-panel col s12 m6');

        let card_title = document.createElement('span');
        card_title.setAttribute('class', 'card-title');
        card_title.innerHTML = array[0];

        let card_abstract = document.createElement('p');
        card_abstract.setAttribute('class', 'abstract');
        card_abstract.innerHTML = array[1];

        let card_url = document.createElement('a');
        card_url.href = array[2];
        card_url.setAttribute('target', 'blank');
        card_url.innerHTML = 'READ IT HERE';

        let card_byline = document.createElement('div');
        card_byline.setAttribute('class', 'byline');
        card_byline.innerHTML = array[4];

        let card_published_date = document.createElement('div');
        card_published_date.setAttribute('class', 'published_date');
        card_published_date.innerHTML = array[3].substring(0, array[3].indexOf('T'));

        let url_container = document.createElement('div');
        url_container.setAttribute('class', 'url');
        url_container.appendChild(card_url);

        let divider = document.createElement('div');
        divider.setAttribute('class', 'divider');

        card.appendChild(card_title);
        card.appendChild(card_abstract);
        card.appendChild(card_byline);
        card.appendChild(card_published_date);
        card.appendChild(divider);
        card.appendChild(url_container);
        start.appendChild(card);

        console.log(array);
    }
};

request.send();