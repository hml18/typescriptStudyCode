/**
 * 代码规范：一定要让typescript的所有变量，成员变量，函数返回值都要有类型，如果能推断就推断，不能就要显示注解
 * 类型注解：‘：类型’就是类型注解
 * 类型推断：如果可以自动的进行类型推断，就不用显示的写明类型注解。
 * 如果不能通过类型推断得到类型，那么用any表示，需要自己通过类型注解指定类型。
 * 一旦推断出来了类型或者通过类型注解指定列类型，就不能在赋值其他类型的值。
 */


 //这种就是需要自己显示指定类型的，不规范写法
 function add(a,b){     //这样的a，b都是any type；得到的返回值也是any
     return a+b;
 }

 let total = add(1,2);


 //规范写法
 function sum(a:number,b:number){
    return a+b;
 }

 let sum1 = sum(1,2);       //这里的sum1就可以推断出来是number类型，就不用写成let sum1:number = sum(1,3)


 //typescript可以推断出对象中赋值了的属性的类型

const xiaoJieJie = {
    name:"刘英",
    age:18
}