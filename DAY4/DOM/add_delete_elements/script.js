//usecase -on click of the add topic 
//get the add and delete buttons
var addButton = document.getElementById("add");
var deleteButton = document.getElementById("delete");

//Get the topics list
var topicList= document.getElementById("topics");

//Add a new topic when the add button is clicked
//addEventListener is a function provided by J.S to add event to a function

addButton.addEventListener("click",function() {
    var newTopic = document.createElement("li");
    newTopic.textContent = "Topic" + (topicList.children.length+1);
    topicList.appendChild(newTopic);    
});

//  Delete the first topic when the delete button is clicked
deleteButton.addEventListener("click",function() {
    topicList.removeChild(topicList.children[0]);
    
})