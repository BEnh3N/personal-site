import { useState } from "preact/hooks";

export default function Greeting({ messages }: { messages: string[] }) {
  const randMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(randMessage());

  const updateGreeting = () => {
    let new_greeting = randMessage();
    while (new_greeting == greeting) {
      new_greeting = randMessage();
    }
    setGreeting(new_greeting);
  };

  return (
    <button
      class="hidden text-gray-500 italic lg:inline"
      onClick={() => updateGreeting()}
    >
      // {greeting}
    </button>
  );
}
