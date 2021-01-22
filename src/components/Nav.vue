<template>
  <yd-tabbar>
    <yd-tabbar-item title="首页" link="index.html" :active="thisItem === 'recommend'">
      <yd-icon name="recommend" slot="icon"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="案件" link="list.html" :active="thisItem === 'list'">
      <yd-icon name="list" slot="icon"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="我的" link="myaccount.html" :active="thisItem === 'user'">
      <yd-icon name="user" slot="icon"></yd-icon>
    </yd-tabbar-item>
  </yd-tabbar>
</template>
<script>
export default {
  name: 'navigation',
  data() {
    return {
    };
  },
  props: {
    thisItem: {
      type: String,
      default: 'withdraw',
    },
  },
  mounted() {
  },
};
</script>
