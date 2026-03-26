import { createSignal, onMount } from "solid-js";

const options = ["programmer", "photographer", "student", "musician", "gamer"];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Typer({ speed = 40, delay = 2300 }) {
  const [index, setIndex] = createSignal(0);
  const [displayText, setDisplayText] = createSignal(options[0]);
  const [cursor, setCursor] = createSignal(true);

  onMount(() => {
    const animate = async (d: number) => {
      const interval = setInterval(() => {
        setCursor(!cursor());
      }, 500);

      await sleep(d);

      clearInterval(interval);
      setCursor(true);

      const word = options[index()] || "";
      for (let j = word.length; j >= 0; j--) {
        setDisplayText(word.substring(0, j));
        await sleep(speed);
      }

      const nextIndex = (index() + 1) % options.length;
      const nextWord = options[nextIndex] || "";
      for (let j = 0; j <= nextWord.length; j++) {
        setDisplayText(nextWord.substring(0, j));
        await sleep(speed);
      }

      setIndex(nextIndex);
      animate(delay);
    };

    animate(3000);
  });

  return <span>{displayText() + (cursor() ? "⎸" : "")}</span>;
}
