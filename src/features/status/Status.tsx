import { useDocumentStore } from "@/stores/document.store";

import { InvalidStatus } from "./components/InvalidStatus";
import { ValidStatus } from "./components/ValidStatus";

export const Status = () => {
  const isValid = useDocumentStore((state) => state.isValid);
  const currentDocument = useDocumentStore((state) => state.currentDocument);

  return (
    <div className="dt-w-full">
      {isValid ? (
        <ValidStatus siteName={currentDocument.name}></ValidStatus>
      ) : (
        <InvalidStatus></InvalidStatus>
      )}
    </div>
  );
};
