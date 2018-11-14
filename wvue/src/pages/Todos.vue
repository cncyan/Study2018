<template>
  <div>
    this is todos
    <router-link to="/">home</router-link>
    <router-link to="/todos">todos</router-link>
    <input v-model="newtodo.text" @keydown.13="createtodo"/>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.text}}
        <span @click="delTodo(todo)">删除</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => {
    return {
      newtodo: {
        id: 0,
        text: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'todos'
    ])
  },
  methods: {
    ...mapActions([
      'addTodo',
      'delTodo'
    ]),

    createtodo () {
      this.addTodo({
        ...this.newtodo
      })
      this.newtodo.text = ''
    }
  }
}
</script>

<style scoped>

</style>
