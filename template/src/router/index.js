Vue.use(VueRouter);

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
    routes: []
});

export default router;