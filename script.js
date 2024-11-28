//window.alert('This is my first script');
//alert('This is my second script');

//document.getElementById('test').innerHTML = "<h2>Display output</h2>"

//document.write('I am learning Javascript');

// console.log('It print console');

// prompt('Enter your name:');


document.getElementById('get_data').addEventListener('click', getData);

function getData(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data =>console.log(data.value))
}


// Arrow function 

