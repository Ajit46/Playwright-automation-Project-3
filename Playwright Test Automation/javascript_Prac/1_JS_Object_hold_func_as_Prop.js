const obj ={
    name: "Ajit Singh",
    age: 31,
    aim: function(){
        console.log("My aim is to become a good QA Automation Engineer at the age of "+this.age);
    }
}
obj.aim();
console.log(obj.name);
