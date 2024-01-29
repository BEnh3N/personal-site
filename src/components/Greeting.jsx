import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(randomMessage);

    return (
        <button class="font-display italic text-accent-subtext text-sm" onClick={() => {
            var new_greeting = randomMessage();
            while (new_greeting === greeting) {
                new_greeting = randomMessage();
            }
            setGreeting(new_greeting);
        }}>{greeting}</button>
    );
}