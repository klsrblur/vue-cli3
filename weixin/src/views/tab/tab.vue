<template>
  <div class="tab">
    <router-link class="mini item" to="/weixin" tag="div">
      <img src="../../assets/image/微信.png" alt="">
      <p>微信</p>
    </router-link>
    <router-link class="tell item" to="/tongxun" tag="div">
      <img src="../../assets/image/通讯录.png" alt="">
      <p>通讯录</p>
    </router-link>
    <router-link class="find item" to="/faxian" tag="div">
      <img src="../../assets/image/发现.png" alt="">
      <p>发现</p>
    </router-link>
    <router-link class="me item" to="/wo" tag="div">
      <img src="../../assets/image/wo.png" alt="">
      <p>我</p>
    </router-link>
  </div>
</template>
<script>
export default {
  

}
</script>
<style scoped>
.tab{
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
}
.item{
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.item p{
  font-size: 14px;
  margin-top: 4px;
}
.item img{
  margin-top: 3px;
}
.item img{
  width: 30px;
}
.router-link-active,item{
  color: green;
}

</style>
