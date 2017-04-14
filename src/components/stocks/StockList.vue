<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 my-2" v-for="stock in stocks">
                <stock :name="stock.name" :price="stock.price"></stock>
            </div>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        data() {
            return {
                stocks : this.$store.state.stocks,
            }
        },
        components: {
            stock : Stock
        },
        // Vue life hookds
        created() {
            this.$store.dispatch('randomizeStockPrice');
        }
    }
</script>