import { createSignal } from "solid-js";

const messages = [
  "experience the greatest website to ever exist",
  "web dev is way too hard",
  "help",
  '"if you wait until the last minute, it only takes a minute to do"',
  "according to all known laws of aviation...",
  "you got games on your phone?",
  "you can't just say perchance",
  "ai can't take my job because I don't have one",
  "how strange it is to be anything at all...",
];

const randIndex = () => {
  return Math.floor(Math.random() * messages.length);
};

export default function Greeting() {
  const [index, setIndex] = createSignal(randIndex());

  const updateMessage = () => {
    let newIndex;
    do {
      newIndex = randIndex();
    } while (newIndex == index());
    setIndex(newIndex);
  };

  return (
    <button
      class="hidden text-gray-500 italic lg:inline"
      onClick={updateMessage}
    >
      // {messages[index()]}
    </button>
  );
}
