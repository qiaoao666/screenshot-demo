import {BrowserWindow, ipcMain} from "electron";
const events = require("events");
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
import {isDevelopment} from "./constant.js";

const winConfig = {
  show: false,
  focusable: true,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
}

export default class BaseWindow extends events {
  constructor(confInfo, routerLink = "/", name = routerLink) {
    super();
    this.name = name;
    this.routerLink = routerLink;
    this.config = {
      ...winConfig,
      ...confInfo
    }
    this.windowInstance = new BrowserWindow(this.config);
    if (isDevelopment) {
      this.windowInstance.loadURL(`${process.env.WEBPACK_DEV_SERVER_URL}#${routerLink}`);
    } else {
      createProtocol("app");
      this.windowInstance.loadURL(`app://./index.html/#${routerLink}`);
    }
    this.init();
  }
  init() {
    this.windowInstance.once("ready-to-show", () => {
      this.windowInstance.show();
    })
    this.windowInstance.on("show", () => {
      this.emit("show");
    })
    if (!this.config.frame) {
      this.frameEventHandle();
    }
  }
  close() {
    if (this.windowInstance && this.windowInstance.isVisible()) {
      this.windowInstance.close();
      this.windowInstance = null;
    }
  }
  frameEventHandle() {
    ipcMain.on(`${this.name}-minimize`,() => {
      this.windowInstance.minimize();
    })
    ipcMain.on(`${this.name}-maximize`,() => {
      this.windowInstance.maximize();
    })
    // 最大化还原
    ipcMain.on(`${this.name}-restore`,() => {
      this.windowInstance.restore();
    })
    ipcMain.on(`${this.name}-close`,() => {
      this.close();
    })
  }
  openDevTools() {
    this.windowInstance.openDevTools();
  }
}