/**
 * 数组类型注解
 */


//单一类型的数组
const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const undefArr: undefined[] = [undefined, undefined,];

//混合类型的数组
const arr: (number | string)[] = [1, "2", 63];


//对象类型的数组
const xiaoJieJies1: { name: string, age: number }[] = [
    { name: "刘亦菲", age: 18 },
    { name: "杨幂", age: 18 },
];

//类型别名 type alias
type Lady = { name: string, age: number }       //给类型取名字，也可以定义为一个类
const xiaoJieJies2: Lady[] = [
    { name: "刘亦菲", age: 18 },
    { name: "杨幂", age: 18 },
];


class Madam{
    name:string;        //类里面用分号
    age:number;
}
const xiaoJieJies3: Madam[] = [
    { name: "刘亦菲", age: 18 },
    { name: "杨幂", age: 18 },
];
