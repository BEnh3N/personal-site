import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <button class="font-display italic text-accent-subtext text-sm" onClick={() => {
            var new_greeting;
            do {
                new_greeting = randomMessage();
            } while (new_greeting == greeting);
            setGreeting(new_greeting);
        }}>{greeting}</button>
    );
}