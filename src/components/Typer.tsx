import { useEffect, useState } from "preact/hooks";

const options = ["programmer", "photographer", "student", "musician", "gamer"];

const sleep = async (time: number) => {
  await new Promise((r) => setTimeout(r, time));
};

export default function Typer({ speed = 40, delay = 2300 }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(options[0]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const animate = async () => {
      interval = setInterval(() => {
        setCursor((cursor) => !cursor);
      }, 500);

      await sleep(delay);

      clearInterval(interval);
      setCursor(true);

      const nextIndex = (index + 1) % options.length;
      const word = options[index] || "";
      const nextWord = options[nextIndex] || "";

      for (let i = word.length; i >= 0; i--) {
        setDisplayText(word.substring(0, i));
        await sleep(speed);
      }

      for (let i = 0; i <= nextWord.length; i++) {
        setDisplayText(nextWord.substring(0, i));
        await sleep(speed);
      }

      setIndex(nextIndex);
    };

    animate();
  }, [index]);

  return <span>{displayText + (cursor ? "⎸" : "")}</span>;
}
