<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<app-product></app-product>
					<hr>
					<button class="btn btn-primary"
							:disabled="btnDisabled"
                            @click="onOrder"
					>
						Order now
					</button>
					<div class="alert alert-success"
                         v-if="showResult">
                         Your order is done
                     </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import AppProduct from "./Product"
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters([
				'cnt',
                'orderState'
			]),
			btnDisabled(){
				return this.cnt < 1 || this.orderState !== null;
			},
            showResult(){
                return this.orderState == 'done'
            }
		},
        methods:{
            onOrder(){
                this.$store.dispatch('sendOrder');
            }
        },
		components:{
			AppProduct
		}
	}
</script>
<style scoped>
    .alert{
        margin:10px 0px;
    }

</style>
