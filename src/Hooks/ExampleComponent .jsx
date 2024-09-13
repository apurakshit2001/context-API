import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const ExampleComponent = () => {
  const divRef = useRef(null);
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    alert('useLayoutEffect: Component is about to paint');
    
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'yellow';
    }
  }, []);

  useEffect(() => {
    alert('useEffect: Component has been mounted');

    const timer = setTimeout(() => {
      if (divRef.current) {
        divRef.current.style.backgroundColor = 'lightblue';
        alert('setTimeout: Background color changed to light blue');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (count > 0) {
      alert(`useEffect (componentDidUpdate): Count has been updated to ${count}`);
    }
  }, [count]);

  return (
    <div ref={divRef} style={{ padding: '20px' }}>
      <p>Hello from ExampleComponent</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default ExampleComponent;
