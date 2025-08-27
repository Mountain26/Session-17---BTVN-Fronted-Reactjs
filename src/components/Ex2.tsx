import { useState } from "react";
export default function Ex2() {
    const [product] = useState({
        id: 1,
        name: "Laptop Gaming",
        price: 25000000,
        quantity: 5,
    });
    return (
        <div>
        <h1>Tên sản phẩm: {product.name}</h1>
        </div>
    );
}
