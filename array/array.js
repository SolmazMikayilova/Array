//task1
/*num=[8,29,1,64,72,-9]
let sum=0;count=0;
for (let index = 0; index < num.length; index++) {
if(num[index]%3==0){
    sum+=num[index];
   }
   if(num[index]%3==0){
    count++;
   }
}
result=sum/count;
console.log(result); */


//task2
/* num=[101,21,-81,3,-200,2000]
let sum=0;
for (let index = 0; index < num.length; index++) {
if(num[index]>=100 || num[index]<=-100 ){
    sum+=num[index]
  }
}
console.log(sum); */


//task3  
/*num=[2,-17,84,45,-92]
let max=num[0]
let min=num[0]
for (let index = 0; index < num.length; index++) {
    if(num[index]>max){
        max=num[index]
    }
    if(num[index]<min){
        min=num[index]
    }    
}
average=(min+max)/2
console.log(average); */


//task4
/*let name = ["Ali", "Emma", "Andrew", "Alexander", "Bree", "Jolene", "Anna"];
let count = 0;
let first = name[0][0];
for (let index = 0; index < name.length; index++) {
    if (name[index][0] == first) {
        count++
    }
}
console.log(count); */


//task5

/*let count = 0;
let workers = [
    {
        firstName: "Luke",
        lastName: "Brown",
        salary: 700
    },
    {
        firstName: "Audrey",
        lastName: "Beltran",
        salary: 400
    },
    {
        firstName: "Emmie",
        lastName: "Patrick",
        salary: 800
    },
    {
        firstName: "Eric",
        lastName: "Bryant",
        salary: 900
    },
    {
        firstName: "Antonio",
        lastName: "Valentine",
        salary: 200
    }
]
for (let index = 0; index < workers.length; index++) {
    if (workers[index].salary > 500) {
        console.log(workers[index].firstName + " " + workers[index].lastName);
    }
} */
