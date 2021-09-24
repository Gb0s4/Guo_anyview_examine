<template>
    <div class="todos">
        <ul>
            <!-- t为todos数组内的对象，把每个对象的值传给MyItem组件进行渲染 -->
            <MyItem
                v-for="t in todos" 
                :key="t.id"
                :t="t"
            />
        </ul>
    </div>
</template>

<script>
// 引入MyItem组件
import MyItem from '../components/MyItem.vue'
// 引入mapState方法
import {mapState} from 'vuex'

export default {
    name: 'All',
    components: {
        MyItem,
    },
    computed: {
        // 但todos发生变化时页面会重新渲染
      ...mapState({
        todos: state => state.todos
      })
    },
    // 当实例挂载到容器后，重新从本地存储获得数据并赋值给state.todos对象数组
    mounted() {
      this.$store.commit('getFromLocal')
    }
}

</script>

<style lang="css">
    .todos {
        margin: 0 auto;
        border: 1px solid #ececec;
        width: 588px;
        background-color: #fff;
    }
</style>