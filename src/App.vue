<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="postcss">
  /* @import '@/assets/fonts/iconfont.css' */
  #app {
    overflow: hidden; position: absolute; size:100%;font-size: 24px; max-width: 10rem;left: 50%; transform: translateX(-50%);
    font-family: 'helvetica neue', arial, 'hiragino sans gb', stheiti, 'wenquanyi micro hei', \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, sans-serif; -ms-text-autospace: ideograph-alpha ideograph-numeric ideograph-parenthesis; text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis; line-height: 1.5em;
    button, input, select {font-family: 'helvetica neue', arial, 'hiragino sans gb', stheiti, 'wenquanyi micro hei', \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, sans-serif;}
  }
</style>

<script>

export default {
  name: 'app',
  async mounted() {
    this.$socket.on('connect', () => {
      console.log('socket 链接成功'); // true
    });
    this.sockets.subscribe('routerChange', (router) => {
      this.$router.push(router);
    });
  },
  destroyed() {
    this.sockets.unsubscribe('routerChange');
  },
};

</script>
<style src="@/assets/css/base.css"></style>
