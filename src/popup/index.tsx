import "../main.css";

import { Footer } from "~components/footer";
import { Header } from "~components/header";
import { documents } from "~configs/documents";
import { Documents } from "~domains/documents/documents";
import { useGetCurrentUrl } from "~hooks/getCurrentUrl";

import SwitchButtons from "./switch-buttons";

const IndexPopup = () => {
  const currentUrl = useGetCurrentUrl();
  if (!currentUrl) return;
  const documents = new Documents();
  const document = documents.getByUrl(currentUrl);

  console.log(document);

  return (
    <>
      <Header title="DocsMate"></Header>
      <div className="p-2">
        <select className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-teal-500 dark:focus:border-teal-500">
          <option value="ja">日本語</option>
          <option value="en">English</option>
        </select>
        {/* <input onChange={(e) => setData(e.target.value)} value={data} /> */}
        {/* <button onClick={hello}>言語切替</button> */}
        <SwitchButtons url={"sa"}></SwitchButtons>
      </div>
      <Footer></Footer>
    </>
  );
};

export default IndexPopup;
