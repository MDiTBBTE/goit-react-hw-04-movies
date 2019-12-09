import React, { Component } from "react";
import styles from "./Сredit.module.css";
import { getCredits } from "../../services/ApiMovies";

class Сredit extends Component {
  state = {
    credit: []
  };

  componentDidMount() {
    getCredits(this.props.match.params.id).then(data =>
      this.setState({ credit: [data] })
    );
  }

  render() {
    const { credit } = this.state;
    console.log(credit);
    // console.log(credit.length);
    return (
      <div>
        {credit.length && (
          <ul className={styles.credit}>
            {credit[0].cast.map(castItem => (
              <li key={castItem.id}>
                <img
                  src={`http://image.tmdb.org/t/p/original/${castItem.profile_path}`}
                  alt={castItem.name}
                  style={{ width: "60px", display: "block" }}
                />
                {castItem.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Сredit;
