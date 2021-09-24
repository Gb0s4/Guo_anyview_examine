<template>
    <div>
        <span>{{DoneLength}} items left</span>
    </div>
</template>

<script>
export default {
    name: 'Left',
    computed: {
        DoneLength() {
            // 利用reduce方法统计没做过的对象
            return this.$store.state.todos.reduce((pre,Obj) => {
                return pre + (!Obj.done ? 1 : 0)
            }, 0)
        }
    },
}
</script>