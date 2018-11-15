<template>
  <div class="home">
    <div class="homain">
      <div class="maincon">
        <div class="smcil">
          收入：1234万¥
        </div>
        <div class="bgcil" @cliick="addbill"></div>
        <div class="smcil">
          指出：1万¥
        </div>
      </div>
    </div>
    <div class="hoincome"></div>
    <div class="hopay"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus">
  .home
    margin 0
    padding 0
    .homain
      width 100%
      height 3rem
      border 0.02rem solid red
      box-sizing border-box
      .maincon
        width 100%
        display flex
        justify-content center

</style>
