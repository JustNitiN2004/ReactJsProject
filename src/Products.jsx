import React from 'react';
import { Link } from 'react-router-dom';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        console.log("Fetching API data...");
         
         

        fetch("/data.json")  
            .then(res => res.json())
            .then(res => {
                 
                this.setState({ data: res }, () => console.log(this.state.data));
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    render() {
        return (
            <div className="container mt-4">
                <h1 className="text-center">API Data</h1>
                <hr />
                <div className="row">
                    {this.state.data.map((val) => (
                        <div key={val.id} className="col-md-4 col-sm-6 col-12 mb-4">
                            <div className="card h-100 shadow-lg">
                                <img 
                                    src={val.image} 
                                    className="card-img-top p-3" 
                                    alt="Product" 
                                    style={{ height: "200px", objectFit: "contain" }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{val.title}</h5>
                                    <p className="card-text" style={{ fontSize: "14px" }}>
                                        {val.description.substring(0, 100)}...
                                    </p>
                                    <p className="card-text" style={{ fontSize: "14px" }}>
                                        Rating: {val.rating.rate} 
                                    </p>
                                    <p className="card-text" style={{ fontSize: "14px" }}>
                                        Stock: {val.rating.count} 
                                    </p>
                                    <Link to={`/products/${val.id}`} className="btn btn-primary">
                                        View Product
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Products;
