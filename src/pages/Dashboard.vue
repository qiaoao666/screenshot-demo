<template>
  <div class="dashboard-container">
    <FrameLayer win-name="Dashboard" show-title="test-demo">
      <div class="main-container">
        <h4>当前是否支持截屏: {{ isAllowScreenShot ? '是' : '否' }}</h4>
        <div class="setting-test">
          <span>请选择是否允许截屏: </span>
          <label>
            <input type="radio" :checked="isAllowScreenShot" @change="handleChangeSelect(true)">
            <span>同意</span>
          </label>
          <label>
            <input type="radio" :checked="!isAllowScreenShot" @change="handleChangeSelect(false)">
            <span>拒绝</span>
          </label>
        </div>
      </div>
    </FrameLayer>
  </div>
</template>

<script>
const {ipcRenderer} = window.require("electron");
import config from '@/config.js';

export default {
  name: "Dashboard",
  data() {
    return {
      isAllowScreenShot: config.isAllowScreenShot
    }
  },
  methods: {
    handleChangeSelect(val) {
      this.isAllowScreenShot = val;
      ipcRenderer.send("screenshot-control", val);
    }
  }
}
</script>

<style scoped>
.setting-test {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
}
.setting-test label {
  margin-left: 10px;
  cursor: pointer;
}
.setting-test label input[type=radio] {
  cursor: pointer;
}
</style>
