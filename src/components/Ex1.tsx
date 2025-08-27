import { useState } from "react";
export default function Ex1() {
    const [name] = useState("Nguyễn Văn A");
    return (
        <div>
        <h1>Xin chào, {name}!</h1>
        </div>
    );
}
