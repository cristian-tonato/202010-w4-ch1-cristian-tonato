import { useEffect, useState } from "react";
import { Button } from "./button";
export function Info() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, [counter]);

  const selectAll = (value: number) => {
    //pendiente arreglar
    setCounter(counter + value);
  };
  return (
    <>
      <section className="controls">
        <p className="info">{counter} gentlemen pointing at you</p>
        <Button></Button>
      </section>
    </>
  );
}
