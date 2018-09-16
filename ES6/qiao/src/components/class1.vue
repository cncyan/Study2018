<template>
  <div class="class1">
    <button @click="letstudy">class1</button>
  </div>
</template>

<script>
export default {
  name: 'class1',
  data () {
    return {
    }
  },
  methods:{
    letstudy(){
      {
        let i=1;
        console.log(i);
        const b=2;
        console.log(b);
      }

      {
        var [a,b,...c]=[1,2,3,4,5];
        console.log(a)
      }

      {
        var [a,b]=[1,{c:3,d:5}]
        console.log(b)
      }
      {
        let str1="nihao";
        function abc(s,v1){
          console.log(s,v1);
          return s+v1;
        }
        console.log(abc`i am ${str1}`);
      }

      {
        console.log(Number.isFinite(15));      // isFinite() 15是否有尽
        console.log(Number.isNaN(15))          //isNan()  判断是否为NaN
        console.log(Number.isInteger(15));     //inInteger() 判断是否为整数 注意15.0也是整数   其参数必须为数字否则均为false
        console.log(Number.MAX_SAFE_INTEGER);   //常量，数字的上下限-2的53次方到2的53次方
        console.log(Number.MIn_SAFE_INTEGER);   //常量，数字的上下限-2的53次方到2的53次方
        console.log(Number.isSafeInteger(15));  //参数为数字，是否在上下限的数字
        console.log(Math.truck(4.1));           //获取整数部分
        console.log(Math.sign(5));              //判断数字正数【1】，负数【-1】，0【0】；字符串数字可被转为数字进行判断
        console.log(Math.cbrt(8));              //获取立方根    此外还有三角函数方法以及对数方法
    }

      {
        let arr=Array.of(3,4,5,6,7);
        console.log(arr)                       //of()把一组数据变量转为一个数组

        console.log()
      }


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
