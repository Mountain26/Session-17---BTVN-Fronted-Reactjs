import React, { useState } from "react";
export default function Ex7() {
    const [city, setCity] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);
    };
    return (
        <div>
        <p>Thành phố: {city ? city : "-- Chưa chọn --"}</p>
        <select value={city} onChange={handleChange}>
            <option value="">Chọn thành phố</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Nghệ An">Nghệ An</option>
        </select>
        </div>
    );
}
