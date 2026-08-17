const number_1:number[] = [1,2,3]
const number_2:number[] = [...number_1, 4,5,6]

console.log(number_2);

// Rest 

function resume(name:string, ...skills:string[]):void{
     console.log(name);
     console.log(skills);
}

resume('sahed', 'HTML', 'CSS','JS','TS');