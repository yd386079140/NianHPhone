<template>
  <div class="wrapper with-draw">
    <btn></btn>
    <nav-bar class="home-nav">
      <div slot="left" @click="back"><span class="iconfont icon-weimingmingwenjianjia_jiantou"></span></div>
      <div slot="center">投票</div>
    </nav-bar>


    <div class="dwx">
      <div
        class="dex"
        v-for="(item, index) in list"
        :key="index"
        @click="handleChoose($event, index)"
        :class="choosedList.indexOf(index) === -1 ? '' : 'active'"
      >
        <div class="choose">
          <img v-show="choosedList.indexOf(index) !== -1" src="../assets/images/c1.png" alt="">
          <!-- <img v-else src="../assets/images/choosed.png" alt=""> -->
        </div>
        <div class="pic"><img :src="item.picture" alt=""></div>
      <!-- <div>第{{index + 1}}个节目</div> -->
        <div class="ret">
          <span>{{item.program}}</span>
          <span>{{item.department}}</span>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="box2">
        剩余{{3 - choosedList.length}}张
      </div>
      <button class="box1" @click="HandleSend">
        确认投票
      </button>
    </div>
  </div>
</template>

<script>
// import { Toast } from 'vant';
import { Dialog } from 'vant';
import success from '../assets/images/states_success.png';
import NavBar from '../components/NavBar';
import Btn from '../components/Btn';

export default {
  name: 'success',
  data() {
    return {
      isShow: true,
      success,
      list: [
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
        { picture: 'https://pic2.zhimg.com/80/v2-1aac7b6edfdb5c4f5a05f0c07f0193f5_1440w.jpg?source=1940ef5c', program: '歌舞表演', department: '金融部门' },
      ],
      choosedList: [],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    HandleSend() {
      const surplus = 3 - this.choosedList.length;
      if (surplus > 0) {
        Dialog.alert({
          title: '提示',
          message: `您还有${surplus}张`,
        }).then(() => {
        // on close
        });
      }
    },
    handleChoose(e, idx) {
      const isAdded = this.choosedList.findIndex(i => i === idx);
      // 如果没找到
      if (isAdded === -1) {
        if (this.choosedList.length >= 3) {
          // Toast.fail('最多选3张');
          Dialog.alert({
            title: '提示',
            message: '最多选3张',
          }).then(() => {
            // on close
          });
          return;
        }
        this.choosedList.push(idx);
      } else {
        this.choosedList.splice(isAdded, 1);
      }
      // console.log(this.choosedList);
    },
  },
  watch: {},
  computed: {},
  components: {
    'nav-bar': NavBar,
    Btn,
  },
};
</script>
<style scoped lang='less'>
.dwx{
  padding: 20px 30px;
  margin: 44px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 30px;
  height: calc(100vh - 88px);
  box-sizing: border-box;
  overflow-y: scroll;
}
.dex{
  height: 180px;
  text-align: center;
  font-size: 15px;
  position: relative;
  border-radius: 6px;
}
.pic{
  height: 180px;
}
.pic img{
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.choose{
  width: 30px;
  height: 30px;
  position: absolute;
  top: 3px;
  right: 3px;
}
.choose img{
  width: 100%;
  height: 100%;
}
.ret{
  position: absolute;
  height: 50px;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(63, 110, 95, 0.767);
  color: rgb(255, 255, 255);
  border-radius:0px  0px 6px 6px;
}
.ret span{
  text-align: center;
  height: 25px;
  line-height: 25px;
}
.dwx .active{
  // border: 2px rgb(255, 0, 0) solid;
  box-shadow: 3px 3px 2px 2px rgba(42, 55, 68, 0.753);
}
.box{
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  background-color: rgb(79, 129, 113);
  color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  font-size: 18px;
}
.box1{
  height: 38px;
  width: 100px;
  background-color: rgb(63, 110, 95);
  box-shadow: 3px 3px 2px rgba(33,45,58,0.3);
  margin-top: 3px;
  margin-right: 3px;
  border-radius: 12px;
  line-height: 38px;
}
.box2{
  width: 100px;
}
.home-nav{
  background-color: rgb(63, 110, 95);
  color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  font-size: 18px;
}
.home-nav span{
  font-size: 30px;
  transform: rotateZ(180deg);
  display: inline-block;
}
</style>
