import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    // 给state.todos添加一个对象
    add(state,Obj) {
      state.todos.push(Obj);
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },
    // todos内的对象的done布尔值取反
    changeDone(state,id) {
      state.todos.forEach((Obj) => {
        if(Obj.id === id) Obj.done = !Obj.done
      })
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },
    // 删除todos内的对象的id为id的对象
    del(state,id) {
      state.todos = state.todos.filter( (todo) => {
        return todo.id !== id
      })
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },
    // 删除todos内的对象的done布尔值为true的对象
    clearDone(state) {
      state.todos = state.todos.filter((Obj) => {
        return !Obj.done
      })
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },
    // 从本地存储中获取todos对象
    getFromLocal(state) {
      state.todos = JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  actions: {
  },
  modules: {
  }
})
