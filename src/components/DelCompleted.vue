<template>
    <div>
        <a href="javascript:;" @click="clearCpd">Clear Completed</a>
    </div>
</template>

<script>
export default {
    name: 'Left',
    methods: {
        // 点击Clear Completed时调用clearCpd方法，清除所有已经做完的对象
        clearCpd() {
            this.$store.commit('clearDone');
        }
    }
}
</script>