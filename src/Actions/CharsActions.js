import {
	CHARS_FETCH_FAIL,
	CHARS_FETCH_REQUEST,
	CHARS_FETCH_SUCCESS,
} from "../Constants/CharsConstants";
import Axios from "axios";

export const getChars = (query) => async (dispatch, getState) => {
	try {
		dispatch({
			type: CHARS_FETCH_REQUEST,
		});
		const result = await Axios.get(
			`https://www.breakingbadapi.com/api/characters?name=${query}`
		);
		dispatch({
			type: CHARS_FETCH_SUCCESS,
			payload: result.data,
		});
	} catch (error) {
		dispatch({
			type: CHARS_FETCH_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
