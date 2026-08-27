//Primitivies : number,string,boolean
//More complex types: arrays,objects
//Function types,parameters

//Primitives
let age:number;
age=12;

let userName:string;
userName='Max';

let isInstructor: boolean;
isInstructor=true;

//More Complex types
//Arrays
let hobbies: string[];
hobbies=['Sports','Cooking'];
let ages:number[];
ages=[1,2,3];


type Person ={
    name:string,
    age:number
}
//ojects
let person: Person;
person={
    name:'Max',
    age:12
}

//Array of Objects
let people:Person[];

people=[
    { name:'Max', age:12},
    {name:'Max',age:12}
]

//Type inference
let course='React - The Complete Guide';
//course=12341; //error we should assign string

//Union Types
let course2: string| number;
course2="React";
course2=123;

//Functions and types
function add1(a:number,b:number):number{
    return a+b;
}

function print(value:any):void{
    console.log(value);
}

//Generics
function insertAtBeginning<T>(array:T[],value:T){
    const newArray=[value,...array];
    return newArray;
}

const demoArray=[1,2,3];
const updatedArray=insertAtBeginning(demoArray,-1); //[-1,1,2,3]
//updatedArray[0].split('');

class Student{
    firstName:string;
    lastName:string;
    age:number;
    private courses:string[];

    constructor(first:string,last:string,age:number,courses:string[]){
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.courses=courses;
    }

    enroll(course:string){
        this.courses.push(course);
    }

    listCourses(){
        return this.courses.slice();
    }
}

const student=new Student('Max','Schwarz',32,['angular']);
student.enroll('node.js');
student.listCourses();


//interfaces
interface Human{
    fristName:string;
    lastName:string;
    age:number;
    
    greet: () => void;
}

let max:Human;
max={
    fristName:'Max',
    lastName:'Schwarz',
    age:32,
    greet(){
        console.log('hello')
    }
};

class Instructorimplements Human{
    firstName:string;
    lastName:string;
    age:number;
  greet(){
    console.log('hello)')
  }
}