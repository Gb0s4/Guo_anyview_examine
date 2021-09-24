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
import MyItem from './MyItem.vue'

export default {
    name: 'Todos',
    components: {
        MyItem,
    },
    computed: {
       todos() {
           this.$store.commit('getFromLocal')
           return this.$store.state.todos
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