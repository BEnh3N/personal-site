import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0])

    return (
        <button class="font-display italic text-accent-subtext text-sm" onClick={() => setGreeting(randomMessage())}>{greeting}</button>
    );
}