<template>
    <div class="todo-li">
        <li>
            <!-- check可以控制是否进行勾选，change可以捕获改变勾选与取消勾选的动作 -->
            <input
                type="checkbox"
                :checked="t.done"
                @change="isDone(t.id,t.done)"
            >
            <span :class="addLine">{{t.todo}}</span>
            <a href="javascript:;" class="btn-change" @click="del(t.id)">delete</a>
        </li>
    </div>
</template>

<script>
export default {
    name: 'MyItem',
    // 接收all/active/completed三个路由组件传进来的对象t
    props: [
        't',
    ],
    data() {
        return {
            // addLine控制文字中划线样式 
            addLine: '',
        }
    },
    methods: {
        // 改变checkbox的勾选情况时调用isDone方法,传入id与done值
        isDone(id,done) {
            this.$store.commit('changeDone',id);
            // 判断是否要给文字加中划线
            if(!done) {
                this.addLine = 'line-through';
            } else {
                 this.addLine = '';
            }
        },
        // 点击delete时调用del方法，传入id值
        del(id) {
            this.$store.commit('del',id);
        },
        
    },
    // 当时实例挂载到容器后，根据done值判断是否为文字添加中划线
    mounted() {
        if(this.t.done) {
            this.addLine = 'line-through';
        }
    }
}
</script>

<style lang="css">
    .todo-li {
        border-bottom: 1px solid #ececec;
        width: 588px;
    }
    .todo-li li {
        position: relative;
        padding: 0 10px;
        height: 58px;
    }
    .todo-li li input {
        position: relative;
        top: 5px;
        height: 20px;
        width: 20px;
    }
    .todo-li li span {
        margin-left: 20px;
        line-height: 58px;
    }
    .btn-change {
        display: none;
        position: absolute;
        right: 10px;
        padding: 0 10px;
        line-height: 58px;
        color: red;
    }
    .line-through {
        text-decoration: line-through;
    }
    .todo-li li:hover {
        background-color: pink;
    }
    .todo-li li:hover a {
        display: inline-block;
    }
</style>