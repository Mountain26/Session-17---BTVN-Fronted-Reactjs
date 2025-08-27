import React, { useState } from "react";
export default function Ex5() {
    const [title, setTitle] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    return (
        <div>
        <input
            type="text"
            placeholder="Nhập nội dung"
            value={title}
            onChange={handleChange}
        />
        <h1>{title}</h1>
        </div>
    );
    }