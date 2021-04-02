import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import "./App.css";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/Characters/CharacterGrid";
import Search from "./components/UI/Search";
import { getChars } from "./Actions/CharsActions";

const AppFunRedux = () => {
	// const [items, setItems] = useState([]);
	// const [isLoading, toggleLoading] = useState([true]);
	const [query, setQuery] = useState("");
	const inputRef = useRef();

	const dispatch = useDispatch();
	const charList = useSelector((state) => state.charactersList);
	const { loading: isLoading, error, items } = charList;
	useEffect(() => {
		const timer = setTimeout(() => {
			if (query === inputRef.current.value) {
				// Axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
				// 	.then((response) => {
				// 		// this.setState({ items: response.data, isLoading: false });
				// 		toggleLoading(false);
				// 		setItems(response.data);
				// 	})
				// 	.catch((error) => {
				// 		console.log("some thing is wrong");
				// 	});
				dispatch(getChars(query));
			}
		}, 500);
		return () => {
			// clean up
			clearTimeout(timer);
		};
	}, [query]);

	return (
		<div className="container">
			<Header />
			<Search refe={inputRef} getQuery={(q) => setQuery(q)} />

			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default AppFunRedux;
