<template>
  <p>{{$store.state.count}}</p>
  <button @click="$store.commit(add)"></button>
  <button @click="$store.commit(reduce)"></button>
</template>

<script>
  import store from "../vuex/store.js"

  export default{
    data(){
      return {
        msg:"学习vuex"
      }
    },
    store
  }
</script>
