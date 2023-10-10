'use strict'

import {app, screen, ipcMain} from 'electron';
import Launch from "./wins/LaunchPage";
import Dashboard from "./wins/Dashboard";
import config from './config.js';
import {
  DESIGN_LAUNCH_WIDTH,
  DESIGN_LAUNCH_HEIGHT,
  DESIGN_DASHBOARD_WIDTH,
  DESIGN_DASHBOARD_HEIGHT
} from "./utils/constant.js";
import {getRealWidth, getRealHeight} from "./utils";
const isDevelopment = process.env.NODE_ENV !== 'production'

let rect;
let launchPage = null;
let currentWin = null;

function createWindow() {
  const width = getRealWidth(rect, DESIGN_DASHBOARD_WIDTH);
  const height = getRealHeight(rect, DESIGN_DASHBOARD_HEIGHT);
  const dashboard = new Dashboard({
    width,
    height,
    minWidth: width,
    minHeight: height
  });
  currentWin = dashboard;
  // Set content protection based on the initial values of the configuration
  if (!config.isAllowScreenShot) {
    currentWin.windowInstance.setContentProtection(true);
  }
  isDevelopment && dashboard.openDevTools();
  dashboard.on("show", function () {
    if (launchPage && launchPage.windowInstance && !launchPage.windowInstance.isDestroyed()) {
      console.log('Attempt to close loading page');
      launchPage.close();
    }
  })
}

app.on('ready', async () => {
  rect = screen.getPrimaryDisplay().bounds;
  launchPage = new Launch({
    width: getRealWidth(rect, DESIGN_LAUNCH_WIDTH),
    height: getRealHeight(rect, DESIGN_LAUNCH_HEIGHT)
  })
  launchPage.on("show", function () {
    setTimeout(() => {
      createWindow();
    },1500)
  })
})

ipcMain.on("screenshot-control", (_event, enableScreenShot) => {
  console.log('enableScreenShot:::', enableScreenShot);
  if (currentWin && currentWin.windowInstance) {
    currentWin.windowInstance.setContentProtection(!enableScreenShot);
    console.log('>>>>>>>>>>>>>>>');
  }
})

