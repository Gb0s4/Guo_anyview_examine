<template>
    <div class="input">
        <input type="text" placeholder="What needs to be done?" @keyup.enter="add">
    </div>
</template>

<script>
// 引入nanoid插件，用于生成随机字符串
import {nanoid} from 'nanoid'

export default {
    name: 'MyInput',
    methods: {
        // 按下回车键并弹起时调用add方法，并传入mouseevent对象                                                                 
        add(e) {
            if(e.target.value) {
                // 生成一个新对象存放信息
                const todoObj = {
                    // 把随机生成的字符串作为id
                    id: nanoid(),
                    // 把输入框的value作为代办事项
                    todo: e.target.value,
                    // 默认没有做过
                    done: false
                }
                this.$store.commit('add',todoObj);
                // 清空输入框
                e.target.value = '';
            }
        }
    },
}
</script>

<style lang="css">
    .input input {
        display: block;
        margin: 1px auto;
        padding: 0 20px;
        height: 60px;
        width: 548px;
        outline: none;
        border: 1px solid #f5f5f5;
        box-shadow: 0 2px 15px 0 rgba(0,0,0,.15)
    }  
    .input input:focus {
        border: 1px solid #b83f45;
    }
</style>