<template>
    <div class="todos">
        <ul>
            <MyItem
                v-for="t in todos"
                :key="t.id"
                :t="t"
            />
        </ul>
    </div>
</template>

<script>
import MyItem from '../components/MyItem.vue'

export default {
    name: 'Completed',
    components: {
        MyItem,
    },
    // 这里是与all路由组件唯一有区别的地方
    computed: {
       todos() {
            // 创建一个新的数组并把state里的todos对象数组赋值给它
            let todoList = this.$store.state.todos
            // 用filer方法筛选掉没做过的对象
            todoList = todoList.filter((Obj) => {
                return Obj.done
            })
            return todoList
       } 
    },
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