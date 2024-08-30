import { useState } from "react";

const Informacion = ({ Hello }) => {
    const [mjs, setMsj] = useState('')
    const handleClick = () => {
        setMsj('(from changed state)');
    }
  return (
    <div>
      <h1>Hello {Hello} {mjs}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Informacion;
