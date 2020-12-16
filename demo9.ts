/**
 * 
 * 接口除了可以限制对象外，还可以限制类（类可以比接口中的属性多，并且一定要实现接口中的所有方法）
 * 接口之间的继承关系：用extends。一般而言，继承者应该有更多的属性或者方法。
 */

interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number;  //?表示不是必须，可选
    [propname: string]: any;  //表示添加任意自定义属性，属性名必须是string，属性值可以是任意类型

}


// // 如果Girl中没有[propname:string]:any;这一行     添加sex属性将报错。

let girls: Girl[] = [{ name: "刘亦菲", age: 30, bust: 94 }, { name: "杨幂", age: 28, bust: 89, waistline: 21 }, { name: "周迅", age: 35, bust: 85, waistline: 20, sex: "女" },]


let screenResume = function (girl: Girl) {
    girl.age < 30 && girl.bust > 85 && console.log(girl.name + "进入面试...");         //学习一下这种写法，相当于if(...){console.log(...)}
    (girl.age >= 30 || girl.bust <= 85) && console.log(girl.name + "被淘汰了...");
}

let getResumeInfo = function (girl: Girl) {
    console.log(girl.name + "的年龄是" + girl.age);
    console.log(girl.name + "的胸围是" + girl.bust);
    girl.waistline && console.log(girl.name + "的腰围是" + girl.waistline);
    girl.sex && console.log(girl.name + "的性别是" + girl.sex);
}

for (let girl of girls) {
    screenResume(girl);
    getResumeInfo(girl);
}


//接口中定义方法
interface Madam {
    name: string;
    id: number;
    //在接口中定义方法，返回值是string类型
    say(): string
}


//this指代的是调用这个函数的对象！！！
let madam:Madam = {name:"",id:911,say:function(){return "编号"+this.id+"为人民服务!"}};
console.log(madam.say())



//用接口约束类
class Employee implements Madam{
    name:string;
    id:number;
    //比接口多的属性
    age:number;
    bust:number;
    //必须实现接口中的方法,否则报错
    say():string{return "欢迎光临本店";};
}

let employee:Employee = new Employee();

//接口之间的继承
interface techer extends Girl{
    tech():string;
}