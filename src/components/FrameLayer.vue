<template>
  <div class="frame-layer-container">
    <div ref="dragHeader" class="drag-header clear-float">
      <slot name="dragHead">
        <div class="left title">
          {{ showTitle }}
        </div>
        <div class="right button-group">
          <div class="btn iconfont icon-zuixiaohua left" @click="handleMinimize"></div>
          <div class="btn iconfont left" :class="isMaximize ? 'icon-3zuidahua-3' : 'icon-3zuidahua-1'" @click="handleMaximize"></div>
          <div class="btn iconfont icon-guanbi left close" @click="handleClose"></div>
        </div>
      </slot>
    </div>
    <div class="frame-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  const {ipcRenderer}  = window.require("electron");
  export default {
    name: "FrameLayer",
    props: {
      winName: {
        type: String,
        required: true,
      },
      showTitle: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isMaximize: false,
      }
    },
    methods: {
      handleMinimize() {
        ipcRenderer.send(`${this.winName}-minimize`);
      },
      handleMaximize() {
        if (this.isMaximize) {
          ipcRenderer.send(`${this.winName}-restore`);
        } else {
          ipcRenderer.send(`${this.winName}-maximize`);
        }
        this.isMaximize = !this.isMaximize;
      },
      handleClose() {
        ipcRenderer.send(`${this.winName}-close`)
      }
    }
  }
</script>

<style scoped>
  .frame-layer-container {
    width: 100%;
    height: 100%;
  }

  .frame-layer-container .drag-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    background-color: #009FFF;
    border-bottom: 1px solid #fefefe;
    -webkit-app-region: drag;
    color: #fff;
  }

  .drag-header button, .drag-header .btn {
    -webkit-app-region: no-drag;
  }

  .drag-header .title {
    font-size: 18px;
    height: 50px;
    font-weight: 600;
  }
  .drag-header .title i {
    font-size: 18px;
  }

  .frame-layer-container .frame-content {
    height: calc(100% - 50px);
  }
  .drag-header .button-group {
    padding: 10px 0;
    height: 50px;
    line-height: 30px;
  }
  .drag-header .btn {
    margin: 0 8px;
    padding: 0 2px;
    cursor: pointer;
    height: 30px;
  }
  .drag-header .btn:hover {
    color: #B2E2FF;
  }
  .drag-header .btn:active {
    color: #4BBBFF;
  }
  .drag-header .btn.close:hover {
    color: #F6647F;
  }
  .drag-header .btn.close:active {
    color: #E54849;
  }
</style>