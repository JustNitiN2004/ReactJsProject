import React from "react";
import axios from "axios";

class NewsApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: [],
      hasFetched: false, 
    };
  }

  componentDidMount() {
    if (!this.state.hasFetched) {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=7c66a2943e4d4c68844e50023ae14a17"
        )
        .then((res) => {
          this.setState({ mydata: res.data.articles, hasFetched: true });  
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }

  render() {
    return (
      <>
        <h1>News API</h1>
        <div className="container mt-4">
          <hr />
          <div className="row">
            {this.state.mydata.map((val, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
                <div className="card h-100 shadow-lg">
                  {val.urlToImage && (
                    <img
                      src={val.urlToImage}
                      className="card-img-top p-3"
                      alt="News"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text" style={{ fontSize: "14px" }}>
                      {val.content
                        ? `${val.content.substring(0, 100)}...`
                        : "No content available"}
                    </p>
                    <p className="card-text" style={{ fontSize: "14px" }}>
                      <strong>Date:</strong>{" "}
                      {new Date(val.publishedAt).toLocaleDateString()}
                    </p>
                    <p className="card-text" style={{ fontSize: "14px" }}>
                      <strong>Author:</strong> {val.author || "Unknown"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default NewsApi;
