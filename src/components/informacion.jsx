import React from "react";

const Informacion = ({ Hello }) => {
    const handleClick = () => {
        setMsj('(from changed state)');
    }
  return (
    <div>
      <h1>Hello {Hello}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Informacion;
