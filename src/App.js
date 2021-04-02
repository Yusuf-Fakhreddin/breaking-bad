import React, { Component } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Axios from "axios";
import CharacterGrid from "./components/Characters/CharacterGrid";
import Search from "./components/UI/Search";

export class App extends Component {
	state = {
		items: [],
		isLoading: true,
		query: "",
	};

	onSearchChange = (query) => {
		Axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
			.then((response) => {
				this.setState({ items: response.data, isLoading: false });
				console.log(this.state.items);
			})
			.catch((error) => {
				console.log("some thing is wrong");
			});
	};
	componentDidMount() {
		this.onSearchChange("");
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query) {
			// or compare with `prevState`
			this.onSearchChange(this.state.query);
		}
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Search getQuery={(q) => this.setState({ query: q })} />
				<CharacterGrid
					isLoading={this.state.isLoading}
					items={this.state.items}
				/>
			</div>
		);
	}
}

export default App;
