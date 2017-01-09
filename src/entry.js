require('./styles/usage/app.scss');
var common = require('./scripts/utils/util.common.js');
var layout = require('./scripts/tips/layout.string');
common.render(layout);


import index from "./scripts/components/index.vue";
import list from "./scripts/components/list.vue";
import login from "./scripts/components/login.vue";
import register from "./scripts/components/register.vue";
import home from "./scripts/components/home.vue";
import detail from "./scripts/components/detail.vue";
const routes = [{
	path: '/',
	component: index,
	children:[
		{
			path: '/list',
	        component: list
		},
		{
			path:'/me',
			component:login
		},
		{
          path: '/',
          component: home
        }
	]
},{
	path: '/register',
	component: register,
},
{
	path:'/detail/:id',
	component:detail
}
];

const router = new VueRouter({
routes // （缩写）相当于 routes: routes
});

const app = new Vue({
router
}).$mount('#app')
