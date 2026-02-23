import { useState } from "react";

export function useToggle() {
  const [message, setValue] = useState("Click to find the Secret Color");
  const keepSearching = () => setValue("keep Searching..");
  const success = () => setValue("You Made It!!");
  return { message, keepSearching, success };
}
