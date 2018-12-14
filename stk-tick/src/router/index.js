Vue.use(VueRouter);

const Home = resolve => require(['@components/home/index.vue'], resolve);
const Tools = resolve => require(['@components/tools/index.vue'], resolve);

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
            return {x: 0, y: 0}
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
            path: '/tools',
            name: 'tools',
            component: Tools 
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `Dusky-${to.name}`;
    next();
});

export default router;