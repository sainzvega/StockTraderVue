<template>
    <div class="card">
        <h5 class="card-header bg-success">{{name}}<span class="h6"> (Price: {{price}})</span></h5>
        <div class="card-block">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-sm-6 col-md-7">
                        <input class="form-control" type="text" placeholder="Quantity" v-model="qauntity"/>
                    </div>
                    <div class="col-3 offset-2 col-sm-3 offset-sm-2 offset-md-1 col-md-4 offset-lg-1 col-lg-3">
                        <button class="btn btn-success" :disabled="!enableBuyButton" @click="buyClick">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'price'],
        data() {
            return {
                qauntity : null,
            }
        },
        computed: {
            enableBuyButton() {
                return this.qauntity > 0 ? true : false;
            }
        },
        methods: {
            buyClick() {
                this.qauntity = null;
                console.log("Buying Something");
            }
        }
    }
</script>