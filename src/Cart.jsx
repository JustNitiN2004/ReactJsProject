import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Shopping Cart</h2>

            {cart.length === 0 ? (
                <p style={styles.emptyCart}>Your cart is empty.</p>
            ) : (
                <>
                    <div style={styles.cartItems}>
                        {cart.map((item) => (
                            <div key={item.id} style={styles.cartItem}>
                                <img src={item.image} alt={item.title} style={styles.image} />
                                <div style={styles.details}>
                                    <h3 style={styles.title}>{item.title}</h3>
                                    <p style={styles.price}>${item.price.toFixed(2)}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div> 
                    <h3 style={styles.total}>Total: ${totalPrice.toFixed(2)}</h3>
                    <Link to="/checkout" className="btn btn-primary">
                        Checkout
                    </Link>
                </>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#333",
    },
    emptyCart: {
        textAlign: "center",
        color: "#888",
    },
    cartItems: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    cartItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    image: {
        width: "60px",
        height: "60px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    details: {
        flexGrow: 1,
        marginLeft: "15px",
    },
    title: {
        margin: "0",
        fontSize: "16px",
        color: "#333",
    },
    price: {
        margin: "5px 0",
        color: "#777",
    },
    removeButton: {
        padding: "8px 12px",
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.3s",
    },
    removeButtonHover: {
        backgroundColor: "#cc0000",
    },
    total: {
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "15px",
        color: "#333",
    },
};

export default Cart;
