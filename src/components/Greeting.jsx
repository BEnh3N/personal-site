import { useState } from "preact/hooks";

let index = 0;

export default function Greeting({ messages }) {
    const randomMessage = () => {
        index = Math.floor(Math.random() * messages.length);
        return messages[index];
    }
    const [greeting, setGreeting] = useState(() => messages[index]);

    function updateGreeting() {
        var new_greeting;
        do {
            new_greeting = randomMessage();
        } while (new_greeting == greeting);
        setGreeting(new_greeting);
    }

    return (
        <button class="italic text-gray-500" onClick={() => updateGreeting()}>// {greeting}</button>
    );
}