<template>
  <div id="navigator">
    <router-link to="home" tag="li" :class="{'active': curRouterName == 'home'}">
      Home
    </router-link>
    <router-link to="stk-tick" tag="li" :class="{'active': curRouterName == 'stk-tick'}">
      stk tick
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curRouterName: "home"
    };
  },
  computed: {},
  methods: {},
  watch: {
    ["$route"]() {
      this.curRouterName = this.$router.currentRoute.name;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#navigator {
  list-style: none;
  height: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(192, 192, 243);

  & li {
    width:70px;  
    float: left;
    margin:0 10px;
    cursor: default;
    user-select: none;

    &:hover {
      color: rgb(21, 109, 182);
    }

    &.active {
      color: blue;
    }
  }
}
</style>


