import React, { Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getByQuery } from "../../services/ApiMovies";
import MoviesList from "../../components/TrendMovies/MoviesList";
import queryString from "query-string";

class Movies extends Component {
  state = {
    dataFilms: [],
    value: ""
  };
  handleInput = ({ target: { value } }) => {
    this.setState({
      value: value
    });
  };
  componentDidMount() {
    if (this.props.location.search) {
      const pars = queryString.parse(this.props.location.search).query;
      getByQuery(pars).then(data =>
        this.setState({
          dataFilms: data
        })
      );
    }
  }
  handleClick = () => {
    const query = this.state.value;
    getByQuery(query).then(data =>
      this.setState({
        dataFilms: data
      })
    );
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    });
  };

  render() {
    const { dataFilms, value } = this.state;
    return (
      <>
        <SearchBar
          handleInput={this.handleInput}
          handleClick={this.handleClick}
          value={value}
        />
        {dataFilms.length !== 0 && (
          <MoviesList trendList={dataFilms.results} handleQuery={value} />
        )}
      </>
    );
  }
}
export default Movies;
