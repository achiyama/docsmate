# DocsMate : A document language switcher for developers. 🐶

## 環境構築
本プロジェクトの実行には[fnm](https://github.com/Schniz/fnm)をおすすめします。

## 開発方法
#### 開発サーバの起動
```bash
# pnpm の場合
pnpm dev
# npm の場合
npm run dev
```
#### 拡張機能の登録
Google Chromeの拡張機能->拡張機能を管理を選択し、docsmate\build\chrome-mv3-devのディレクトリを選択する
![image](https://github.com/achiyama/docsmate/assets/22658057/8a383178-62bc-4013-8fb2-c495482525ff)

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
