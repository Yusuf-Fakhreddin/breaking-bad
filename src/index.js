import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppFun from "./AppFun";

import { Provider } from "react-redux";
import store from "./store";
import AppFunRedux from "./AppFunRedux";

ReactDOM.render(
	<React.StrictMode>
		{/* <AppFun /> */}
		<Provider store={store}>
			<AppFunRedux />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
