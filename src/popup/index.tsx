import "../main.css";

import { Footer } from "~components/footer";
import { Header } from "~components/header";
import { documents } from "~configs/documents";
import { Documents } from "~domains/documents/documents";
import { useGetCurrentUrl } from "~hooks/getCurrentUrl";

import SwitchButtons from "./switch-buttons";
import { useRef, useState } from "react";

function IndexPopup() {
  const urlRef = useRef("");

  // プルダウンの値を取得
  const [selected, setSelected] = useState("ja");
  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };
  console.log(selected);

  // 現在のURLを取得し、「ja-jp」を「en-us」に単純に変換
  const currentUrl = useGetCurrentUrl();
  if (currentUrl){
    urlRef.current = currentUrl.href.replace(/\/ja-jp\//, '/en-us/');
    console.log("ref", urlRef.current);
  }

  return (
    <>
      <Header title="DocsMate"></Header>
      <div className="p-2">
        <select className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-teal-500 dark:focus:border-teal-500"
          value={selected}
          onChange={handleChange}
        >
          <option value="ja">日本語</option>
          <option value="en">English</option>
        </select>
        {/* <input onChange={(e) => setData(e.target.value)} value={data} /> */}
        {/* <button onClick={hello}>言語切替</button> */}
        <SwitchButtons url={urlRef.current}></SwitchButtons>
      </div>
      <Footer></Footer>
    </>
  );
}

export default IndexPopup;
