/**
 * 
 * 
 * 指定函数的返回类型 
 */

function getTotal(a: number, b: number): number {
    // return a+b+'';   报错
    return a + b;
}

const total1 = getTotal(1, 2);



function sayHello(): void {
    console.log("hello world");
    return;         //这句也可以不写
}


//永远也执行不完函数：会执行报错的函数，或者死循环。
function errorFunction(): never {
    throw new Error();
    console.log("hello world");
}



//参数如果是一个对象，就要按照对象的方式注解类型

function getTotal1({ a, b }: { a: number, b: number }) {
    return a + b;
}

//这种写法是错误的
// function getTotal1({a:number,b:number}){
//     return a+b;
// }

const total2 = getTotal1({ a: 1, b: 2 })