import BaseWindow from "../utils/BaseWindow";

const selfConfig = {
  title: "客户端-demo",
  frame: false,
  resizable: true,
  movable: true,
}

export default class Dashboard extends BaseWindow {
  constructor(confInfo) {
    super(Object.assign({},selfConfig,confInfo), "/dashBoard", "Dashboard");
  }
}