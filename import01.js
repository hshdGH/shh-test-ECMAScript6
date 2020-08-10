import {name, age, gender, say} from "./export01"
// 1. 已经导入的变量是只读的，无法修改。如需修改可以起别名来实现。
console.log(name, age, gender);
say("hello es6.");

// 2. 起别名
import {name as abc, say as hello} from "./export01"
console.log(abc);
hello("hello es6");
