import React, { Component } from "react";
import { trend } from "../../services/ApiMovies";
import TrendMoviesList from "../../components/TrendMovies/MoviesList";

class HomePages extends Component {
  state = {
    dataTrend: []
  };
  componentDidMount() {
    trend().then(data =>
      this.setState({ dataTrend: data, locationFromHome: this.props.location })
    );
  }
  render() {
    const { dataTrend } = this.state;
    return <TrendMoviesList trendList={dataTrend} />;
  }
}
export default HomePages;
