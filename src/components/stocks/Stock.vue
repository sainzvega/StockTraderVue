<template>
    <div class="card">
        <h5 class="card-header" :class="bgColorClass">{{name}}<span class="h6"> (Price: {{price}})</span></h5>
        <div class="card-block">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-sm-6 col-md-7">
                        <input class="form-control" type="text" placeholder="Quantity" v-model="quantity" />
                    </div>
                    <div class="col-3 offset-2 col-sm-3 offset-sm-2 offset-md-1 col-md-4 offset-lg-1 col-lg-3">
                        <button class="btn" :class="btnColorClass" :disabled="!enableButton" @click="moded === 'buy' ? buyClick : sellClick">{{ mode | capFirst }} </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapActions
    } from 'vuex';
    export default {
        props: ['name', 'price', 'mode'],
        data() {
            return {
                quantity: null,
            }
        },
        computed: {
            enableButton() {
                return this.quantity > 0 ? true : false;
            },
            bgColorClass() {
                if (this.mode === 'buy')
                    return 'bg-success'
                else
                    return 'bg-primary'
            },
            btnColorClass() {
                if (this.mode === 'sell')
                    return 'btn-success'
                else
                    return 'btn-primary'
            }
        },
        filters: {
            capFirst(value) {
                let charArray = value.split('');
                charArray[0] = charArray[0].toUpperCase();
                return charArray.join('');
            }
        },
        methods: {
            ...mapActions(['buyStocks', 'sellStocks']),
            buyClick() {
                // TODO: check if there are enough funds
                let total = Math.floor(this.price * this.quantity) / 1000;
                this.buyStock({
                    stockName: this.name,
                    total: total
                });
                this.quantity = null;
            },
            sellClick() {
                // TODO: check if there are enough stocks
                let total = Math.floor(this.price * this.quantity) / 1000;
                this.sellStock({
                    stockName: this.name,
                    total: total
                });
                this.quantity = null;
            }
        },
    }
</script>