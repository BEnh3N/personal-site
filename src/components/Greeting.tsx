import { useState } from "preact/hooks";

export default function Greeting({
  messages,
  initialValue = 0,
}: {
  messages: string[];
  initialValue?: number;
}) {
  const [index, setIndex] = useState(initialValue);

  const randIndex = () => {
    return Math.floor(Math.random() * messages.length);
  };

  const updateMessage = () => {
    let newIndex;
    do {
      newIndex = randIndex();
    } while (newIndex == index);
    setIndex(newIndex);
  };

  return (
    <button
      class="hidden text-gray-500 italic lg:inline"
      onClick={updateMessage}
    >
      // {messages[index]}
    </button>
  );
}
