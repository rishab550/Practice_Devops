import { useContext } from "react";
import { ThemeContext } from "../App2";

const Box3 = () => {
  const { theme, togglefnx } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={togglefnx}>Change Theme</button>
      <p>{theme}</p>
    </div>
  );
};

export default Box3;
