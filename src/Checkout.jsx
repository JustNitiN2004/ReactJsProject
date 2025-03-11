import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.address || !formData.phone) {
            alert("Please fill in all fields");
            return;
        }

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

         
        const newOrder = {
            id: Date.now(),
            customerName: formData.name,
            address: formData.address,
            phone: formData.phone,
            items: cart,
            total: cart.reduce((total, item) => total + item.price, 0),
            date: new Date().toLocaleString(),
        };

       
        const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
        
       
        localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

        
        localStorage.removeItem("cart");
        setCart([]);
        setFormData({ name: "", address: "", phone: "" });

        alert("Order placed successfully!");
        navigate("/myOrder");
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
            <h2>Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} style={{ marginBottom: "10px" }}>
                                {item.title} - ${item.price}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: "10px", padding: "8px" }}
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Shipping Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: "10px", padding: "8px" }}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: "10px", padding: "8px" }}
                        />
                        <button
                            type="submit"
                            style={{ padding: "10px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}
                        >
                            Place Order
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Checkout;
