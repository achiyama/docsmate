import { useDocumentStore } from "@/stores/document.store";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const LanguageSelector = () => {
  const currentDocument = useDocumentStore((state) => state.currentDocument);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={10}
        label="Age"></Select>
    </FormControl>
  );
};
