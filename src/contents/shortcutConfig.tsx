import { useShortcut } from "~hooks/useShortcut"

// 特定のページで実行させたい場合はconfig変数内に設定を記述しexportする
// 今回は全ページでショートカットキー設定するため変数無しでexport
export {}

// カスタムフックをコールするために関数コンポーネントをエクスポート
const setShortcut = () => {
  console.log("test setShortcut");

  // 「Shift+f」で「Foo!!」が出力されるように設定
  useShortcut({
    key: "F",
    shiftKey: true,
    onKeyDown: () => console.log("Foo!!"),
  });

  return <></>
}

export default setShortcut
