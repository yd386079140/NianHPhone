<template>
  <div class="container">
    <div class="main">
      <img class="main1" src="../assets/images/cover@2x.png" alt="">
      <!-- <img class="main2" src="../assets/images/message-adorn@2x.png" alt=""> -->
    </div>
    <div>
      <textarea class="textA" v-model="form.jy" placeholder="😀 请填写您对公司的寄语"></textarea>
    </div>
    <div>
      <div class="inp">
        <input class="tbx" type="text" v-model="form.xm" placeholder="输入您的姓名">
        </div>
      <div class="inp">
        <p class="tbx" @click="visible = true">{{choosedText || '请选择部门'}}</p>
        </div>

        <input class="sub" type="text" @click="tj" placeholder="提交签到">

    </div>

    <van-popup position="bottom" v-model="visible" @cancel="visible = false">
        <van-picker
            v-model="form.chooseId"
            title="选择部门"
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
        />
    </van-popup>
  </div>
</template>

<script>
import { Picker, Popup } from 'vant';

export default {
  data() {
    return {
      visible: false,
      form: {
        jy: '',
        xm: '',
        chooseId: null,
      },
      columns: [{
        text: '研发',
        value: 1,
      }, {
        text: '财务',
        value: 2,
      }],
    };
  },
  components: {
    'van-picker': Picker,
    'van-popup': Popup,
  },
  computed: {
    choosedText() {
      if (!this.form.chooseId) return '';
      return this.columns.find(item => item.value === this.form.chooseId).text;
    },
  },
  methods: {
    tj() {
      console.log(this.form);
    },
    onConfirm(e) {
      this.form.chooseId = e.value;
      console.log(this.form.chooseId);
      this.visible = false;
    },
  },
};
</script>

<style >
.container{
  background-image:  linear-gradient(#04146E, #0167B7);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.sub{
    width: 305px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin-top: 10px;
    background-image:  linear-gradient(#00BDFF, #00E9FF);
}
.main{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main1{
  height: 350px;
  width: 375px;
}
.main2{
  width: 350px;
  height: 100px;
}
.textA{
  height: 85px;
  width: 305px;
  color: aliceblue;
  font-size: 17px;
  border: none;
  background: url(../assets/images/message-adorn@2x.png) top left/50px no-repeat rgba(18, 18, 19, 0.275)
}
textarea[class='textA']::-webkit-input-placeholder {
    color: #fff;
    font-size: 14px;
    line-height: 85px;
    text-align: center;
}
.tbx{
    width: 305px;
    height: 40px;
    border: none;
    background:rgba(18, 18, 19, 0.275);
    color: #fff;
    font-size: 15px;
    padding-left: 30px;
}
.inp{
  background: url(../assets/images/icon-dept.svg) no-repeat left center;
  margin-top: 10px;
}
.tbx::placeholder{
    color: #fff;
}
.sub::placeholder{
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
}

</style>
