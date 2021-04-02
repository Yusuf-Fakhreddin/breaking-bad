import {
	CHARS_FETCH_FAIL,
	CHARS_FETCH_REQUEST,
	CHARS_FETCH_SUCCESS,
} from "../Constants/CharsConstants";

export const charsFetchReducer = (
	state = { loading: true, charsList: [] },
	action
) => {
	switch (action.type) {
		case CHARS_FETCH_REQUEST:
			return { loading: true };
		case CHARS_FETCH_SUCCESS:
			return {
				loading: false,
				items: action.payload,
			};
		case CHARS_FETCH_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
