import React, { Component } from "react";
import { getReviews } from "../../services/ApiMovies";

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    getReviews(this.props.match.params.id).then(data =>
      this.setState({ reviews: [data] })
    );
  }

  render() {
    const { reviews } = this.state;
    console.log(this.state);
    return (
      <div>
        {reviews.length !== 0 &&
          (reviews[0].results.length !== 0 ? (
            reviews[0].results.map(result => (
              <div key={result.id}>
                <h3>{result.author}</h3>
                <p>{result.content}</p>
              </div>
            ))
          ) : (
            <h3>No reviews</h3>
          ))}
      </div>
    );
  }
}
export default Reviews;
