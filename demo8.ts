/**
 * 接口，
 * 作用：减少重复代码
 * 注意：
 *      1. 中间用分号
 *      2. 和类型别名相似，但接口必须是对象形式，但类型别名可以只是一个简单的字符串。例如：type aliasA = string
 */

interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number;  //?表示不是必须，可选
}

let girls: Girl[] = [{ name: "刘亦菲", age: 30, bust: 94 }, { name: "杨幂", age: 28, bust: 89, waistline: 21 },]


let screenResume = function (girl: Girl) {
    girl.age < 30 && girl.bust > 85 && console.log(girl.name + "进入面试...");         //学习一下这种写法，相当于if(...){console.log(...)}
    (girl.age >= 30 || girl.bust <= 85) && console.log(girl.name + "被淘汰了...");
}

let getResumeInfo = function(girl:Girl){
    console.log(girl.name+"的年龄是"+girl.age);
    console.log(girl.name+"的胸围是"+girl.bust);
    girl.waistline && console.log(girl.name+"的腰围是"+girl.waistline);
}

for (let girl of girls) {
    screenResume(girl);
    getResumeInfo(girl);
}