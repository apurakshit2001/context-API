import React, { useRef,useEffect, useLayoutEffect } from 'react';

const HooksUseRef = () => {

    useLayoutEffect(() => {
        alert('useLayoutEffect: Functional component is about to paint');
      }, []);
    
      useEffect(() => {
        alert('useEffect: Functional component has been mounted');
      }, []);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const displayval = () => {
    let g = ref1.current.value;
    let n = ref2.current.value;
    ref3.current.innerText = `Gender : ${g} , Name : ${n}`;
  };

  return (
    <div>
      select gender:
      <select ref={ref1}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <br />
      Name: <input type="text" ref={ref2} />
      <br />
      <button onClick={displayval}>Show</button>
      <h1 ref={ref3}></h1>
    </div>
  );
};

export default HooksUseRef;