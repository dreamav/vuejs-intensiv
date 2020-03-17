<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<app-product></app-product>
					<hr>
					<button class="btn btn-primary"
							:disabled="btnDisabled"
					>
						Order now
					</button>
					{{ cnt }}
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
				'cnt'   
			]),
			btnDisabled(){
				return this.cnt < 1;
			}	
		},
		components:{
			AppProduct
		}
	}
</script>