module.exports = {
  // electron-builder配置
  builderOptions: {
    "appId": "com.screenshot.app",
    "productName": "screenshot-test",
    "publish": [{
      "provider": "generic",
      "url": "http://example.com/app/releases/"
    }],
    "mac": {
      "category": "public.app-category.developer-tools",
      "target": "dmg"
    },
    "dmg": {
      "background": "build/background.tiff",
      "icon": "build/icon.icns",
      "title": "My App"
    },
    "win": {
      "target": "nsis",
      "icon": "build/icon.ico"
    },
    "nsis": {
      "allowToChangeInstallationDirectory": true
    }
  }
}