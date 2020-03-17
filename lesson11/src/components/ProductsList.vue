<template>
	<div>
		<h1>Products</h1>
        <div class="row">
            <div class="col col-sm-4"
                 v-for="product in products"
            >
                <h3>{{ product.title }}</h3>
                <div>{{ product.price }}</div>
                <button class="btn btn-primary"
                        @click="addToCart(product.id_product)"
                    >
                    Add to cart
                </button>
                <button
                    @click="removeFromCart(product.id_product)"
                    class="btn btn-warning"
                >
                    Remove from cart
                </button>
            </div>
        </div>
	</div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {mapActions} from "vuex";

	export default {
        computed:{
            ...mapGetters('products',{
                products: 'items'
            })
        },
        methods:{
           ...mapActions('cart',{
                addToCart: 'add',
                removeFromCart: 'remove'
            })
        }
	}
</script>
