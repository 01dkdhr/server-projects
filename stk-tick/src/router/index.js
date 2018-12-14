Vue.use(VueRouter);

const Home = resolve => require(['@components/home/index.vue'], resolve);
const StkTick = resolve => require(['@components/stk_tick/index.vue'], resolve);

// router.currentRoute:
// {
//     fullpath: "/tools",
//     hase: "",
//     name: "tools",
//     path: "/tools"
// }

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/stk-tick',
      name: 'stk-tick',
      component: StkTick
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = `Dusky-${to.name}`;
  next();
});

export default router;