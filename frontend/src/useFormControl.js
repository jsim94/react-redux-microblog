import { useState } from "react";

export default function useFormControl(initValues) {
  const [fData, setFData] = useState(initValues);

  const onChange = (evt) => {
    const { name, value } = evt.target;

    const copyData = { ...fData };
    copyData[name] = value;

    setFData(copyData);
  };
  return [fData, onChange];
}
