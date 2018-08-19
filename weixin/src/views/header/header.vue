<template>
  <div class="header">    
    <div class="left">微信</div>
    <div class="right">
      <img src="../../assets/image/搜索--1.png" alt="" class="search">
      <img src="../../assets/image/加号.png" alt="" class="add">
    </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  width: 100%;
  display: flex;
  height: 40px;
  background-color: #fff;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
}
.header .left{
  color:#000;
  line-height: 40px;
  margin-left: 15px;
  
}
.header .left .add{
  padding-right: 10px;
}
.header .right{
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right img {
  width: 20px;
  height: 20px;
  color: #fff;
}
</style>
