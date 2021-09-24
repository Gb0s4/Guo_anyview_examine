<template>
    <!-- 只有一段居中的文字 -->
    <div class="footer">
        <p>Double-click to edit a todo</p>
        <p>Written by Evan You</p>
        <p>Part of TodoMVC</p>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
}
</script>

<style lang="css">
    .footer {
        margin: 20px 0;
        line-height: 30px;
        text-align: center;
        color: #808080;
    }
</style>
