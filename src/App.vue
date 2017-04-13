<template>
    <div class="container">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from './components/app/AppHeader.vue';

    export default {
        components: {
            'app-header': AppHeader
        }
    }
</script>