import React, { useState, useMemo } from "react";

export default function Hooksmemo() {
  const [task, setTask] = useState([]);
  const [count, setCount] = useState(0);

  const result = useMemo(() => double(count), [count]);

  return (
    <>
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div>Result Obtained: {result}</div>

      <button
        onClick={() => {
          setTask([...task, "new task"]);
        }}
      >
        ADD TASK
      </button>

      <div>Tasks Added:</div>
      <ol>
        {task.map((v, index) => (
          <li key={index}>{v}</li>
        ))}
      </ol>
    </>
  );
}

function double(count) {
  console.log("This function is called only when the count changes. It is memoized.");
  return count * count;
}
