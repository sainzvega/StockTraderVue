<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 my-2" v-for="stock in ownedStocks">
                <stock :name="stock.name" :price="stock.price" mode="sell"></stock>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters(['ownedStocks'])
        },
        components: {
            stock : Stock
        }
    }
</script>