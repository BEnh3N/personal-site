import { useState } from "preact/hooks";

const messages: string[] = [
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

export default function Greeting() {
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
