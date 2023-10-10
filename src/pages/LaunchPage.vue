<template>
  <div class="launch-page-container">
    Program stating...
    <DotsLoading/>
  </div>
</template>

<script>
  import DotsLoading from "../components/DotsLoading";
  export default {
    name: "LaunchPage",
    components: {
      DotsLoading,
    }
  }
</script>

<style scoped>
  .launch-page-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00cec9;
    color: #fff;
    text-shadow: 1px 1px #fcc,2px 2px #000000;
    font-size: 40px;
    font-weight: 500;
    animation: move-bg 3s infinite linear;
  }
</style>