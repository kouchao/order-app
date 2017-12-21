<template>
    <div class="nav-bar">
        <div>{{title}}</div>
    </div>
</template>

<script>
    import store from '../store/index'
    export default {
        name: 'nav-bar',
        store,
        computed: {
          title () {
                return store.state.title
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        position: fixed;
        height: 39px;
        top: 0;
        left: 0;
        width: 100vw;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
