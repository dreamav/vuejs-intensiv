<template>
	<div>
		<header>
			<div class="container">
				<div class="row">
					<div class="col col-sm-9">
						<h1>Site</h1>
					</div>
					<div class="col col-sm-3">
						<div class="alert alert-default">
							<div>In Cart: </div>
						</div>
					</div>
				</div>
				<hr>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col col-sm-3 menu">
						<ul class="list-group">
                            <router-link
                                v-for="(item,index) in menuList"
                                :key="index"
                                :to="item.url"
                                tag="li"
                                class="list-group-item"
                            >
                              <a>{{ item.text }}</a>
                            </router-link>
						</ul>
					</div>
					<div class="col col-sm-9">
                        <router-view></router-view>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>

	export default {
        computed:{
            menuList(){
                return this.$store.getters['menu/items'];
            }
        }

	}
</script>
