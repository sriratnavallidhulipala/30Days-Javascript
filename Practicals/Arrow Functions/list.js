//to create an array of objects in JavaScript,
const data = [
    {
        name: "SHARUKHAN",
        designation: "Hero"
    },
    {
        name: "Sudha Murthy",
        designation: "Author"
    },
    {
        name: "Modi",
        designation: "C.M"
    },
    {
        name: "A.P.J Abdul Kalam",
        designation: "Scientist"
    },
    {
        name: "Christ Garder",
        designation: "Motivational Speaker"
    }
];
const dataArrayElement = document.getElementById("dataArray");

const processItem = item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.name}, ${item.designation}`;
    dataArrayElement.appendChild(listItem);
};

data.forEach(processItem);



