let data=[
    {name:"prem kumar"},
    {name:"raghu"},
    {name:"vidya"},
    {name:"manish"},
]
console.log(data)

// Assuming 'data' is an array of objects with a 'name' property
const topic = document.getElementById('myList'); // Assuming there is an HTML element with id 'topic'

// Clear existing content of the element
topic.innerHTML = '';

// Create an unordered list and append list items
topic.innerHTML = '<ul>' +
  data.map(data => `<li>${data.name}</li>`).join('') +
'</ul>';
console.log(topic)
