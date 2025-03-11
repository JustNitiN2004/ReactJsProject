import React, { useState, useEffect } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Orders</h2>
      {orders.length === 0 ? (
        <p style={styles.emptyMessage}>No orders placed yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={styles.orderCard}>
            <h4 style={styles.orderId}>Order ID: {order.id}</h4>
            <p style={styles.info}><strong>Name:</strong> {order.customerName}</p>
            <p style={styles.info}><strong>Address:</strong> {order.address}</p>
            <p style={styles.info}><strong>Date:</strong> {order.date}</p>
            <h4 style={styles.total}>Total: ${order.total.toFixed(2)}</h4>
            <h5 style={styles.itemHeading}>Items Ordered:</h5>
            <ul style={styles.itemList}>
              {order.items.map((item) => (
                <li key={item.id} style={styles.item}>
                  <img src={item.image} alt={item.title} style={styles.itemImage} />
                  <span>{item.title} - ${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    color:"black",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "rgb(106 72 72)",
  },
  emptyMessage: {
    textAlign: "center",
    color: "gray",
  },
  orderCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  orderId: {
    color: "#007BFF",
    marginBottom: "10px",
  },
  info: {
    margin: "5px 0",
    fontSize: "14px",
  },
  total: {
    color: "green",
    fontWeight: "bold",
    marginTop: "10px",
  },
  itemHeading: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#444",
  },
  itemList: {
    listStyleType: "none",
    padding: "0",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#fff",
    padding: "8px",
    borderRadius: "5px",
    margin: "5px 0",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  itemImage: {
    width: "50px",
    height: "50px",
    borderRadius: "5px",
    objectFit: "cover",
  },
};

export default MyOrders;
