import BaseWindow from "../utils/BaseWindow";

const selfConfig = {
  frame: false,
  resizable: false,
  alwaysOnTop: true
}

export default class LaunchPage extends BaseWindow {
  constructor(confInfo) {
    super(Object.assign({},selfConfig,confInfo), "/", "LaunchPage");
  }
}