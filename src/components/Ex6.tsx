import React, { useState } from "react";
export default function Ex6() {
    const [text, setText] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };
    return (
        <div>
        <textarea 
            placeholder="Nhập nội dung"
            value={text}
            onChange={handleChange}
        />
        <p>Số ký tự: {text.length}</p>
        </div>
    );
}
