import { useShortcut } from "url:./hooks/useShortcut";

// 下記リンクの「Content Scriptsを追加する」を参考に作成
// 参考サイト: https://zenn.dev/nado1001/articles/plasmo-browser-extension
export {}
console.log("This is content script")

export const setShortcut = () => {
  useShortcut({
    key: "f",
    shiftKey: true,
    onKeyDown: () => console.log("Foo!!"),
  });
  console.log("TEST function");
}
