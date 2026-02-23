import { useState } from "react";

export function useCounter(initialNum) {
    const [count, setValue] = useState(initialNum)
    const inc = () => setValue(count+1)
    const reset = () => setValue(initialNum)
  return { count, inc, reset };
}
