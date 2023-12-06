let name ='mosh';
let age=30;
let person={
    name:'james',
    age:30
};
//DotNotation
person.name='john';
console.log(person.name);
//bracketNotation
person['name']='Mary';
console.log(person.name)

1. we have two notation 
i. dotNotation ii . BracketNotation
which is better?
dotNotation is a bit more concise and its shoter so its the default choice 

However,BracketNotation has its own uses,sometimes,you dont know the name of the target property until the run time.
for example,in our user interface,the user might be selecting the name of the target property.

In that case, in the time of writing code,we dont know what property we're going to access. that is going to be selected at run time by the user.So, we might have another variable somewhere else like selection ,that determines the name of the target property that the user is selecting and that can change at run time.with this,we can access that property using the bracket notation in a dynamic way.So, we pass selection here,and we get the same result.

DotNotation is cleaner and easier  
