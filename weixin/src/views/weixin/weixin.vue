<template>
  <div class="weixin">
    <v-header></v-header>
    <div class="list">
      <div class="item">
        <div class="item-left">
          <img src="../../assets/image/wo.png" alt="">
        </div>
        <div class="item-right">
          <span>小花</span>
          <span>你好</span>
        </div>
      </div>
    </div>
    <tab class="fixed"></tab>
  </div>
</template>
<script>
import Header from '../header/header'
import Tab from '../tab/tab'
export default {

components:{
  Tab,
  VHeader:Header
}
}
</script>
<style scoped>
.list .item{
  display: flex;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

}
.list .item-left img{
  border: 1px solid #ccc;
  width: 50px;
  height: 50px;
}
.item-left{
  width: 20%;
}
.item-right{
  width: 80%;
  display: flex;
  flex-direction: column;
}
.fixed{
  position: fixed;
  bottom: 40px;
}
</style>
