import {Dispatch, SetStateAction} from "react";


type inputVal = string | number;

const Box2 = <T extends inputVal>({
  label,
  value,
  setVal,
}: {
  label: string;
  value: T;
  setVal: Dispatch<SetStateAction<T>>
}) => {
  return (
    <>
      Box2
      <form>
        <label>{label}</label>
        <input type="text" value={value} onChange={(e) => setVal(e.target.value as T)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Box2;
