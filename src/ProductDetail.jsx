import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);





    const addCart = () => {
        if (localStorage.getItem("isLogin") === "true") {

            if (!product) return;
            let cart = JSON.parse(localStorage.getItem("cart")) || []

            if (!cart.some((item) => item.id === product.id)) {
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart))
                alert("product added")
            }
            else {
                alert("Product is already in cart")
            }


        }
        else {
            alert("Log in first")
        }

    }

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProduct = data.find((p) => p.id.toString() === id);
                setProduct(foundProduct);
            })
            .catch((error) => console.error("Error fetching product data:", error));
    }, [id]);

    if (!product) {
        return <h2 style={styles.notFound}>Product not found</h2>;
    }

    return (
        <div style={styles.container}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.price}>Price: ${product.price}</p>
            <p style={styles.description}>{product.description}</p>

            <button className="btn btn-primary" onClick={addCart}>Add To Cart</button><br />
            <Link to={`/products`} className="  btn-primary">
                View Products
            </Link>
        </div>
    );
};


const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "500px",
        margin: "30px auto",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333",
    },
    image: {
        width: "100%",
        maxWidth: "300px",
        borderRadius: "8px",
        marginBottom: "15px",
    },
    price: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#ff6600",
    },
    description: {
        fontSize: "16px",
        color: "#555",
    },
    notFound: {
        textAlign: "center",
        color: "red",
        fontSize: "20px",
        marginTop: "50px",
    },
};

export default ProductDetail;
