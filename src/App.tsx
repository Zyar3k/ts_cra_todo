import React from "react";
import "./App.css";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => number;

// function printName(name:string){
//     console.log(name)
// }
// printName('John')

// type Person = {
//     name: string
//     age?: number
// }
// let person: Person={
//     name: 'Max',
// }
// let lotsOfPeople: Person[]

type X = {
  a: string;
  b: number;
};
interface Person extends X {
  name: string;
  age?: number;
}

const App: React.FC = () => {
  return <div className="App">Hello World</div>;
};

export default App;
