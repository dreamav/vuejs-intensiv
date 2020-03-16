<template>
	<div>
		<header>
			<div class="container">
				<div class="row">
					<div class="col col-sm-12">
						<h1>Site</h1>
						<app-cart></app-cart>
					</div>
				</div>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col col-sm-12">
						<app-product></app-product>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
  import AppProduct from "./components/Product"
  import AppCart from "./components/Cart"

	export default {
		components:{
			AppProduct,
			AppCart
		}

	}
</script>
