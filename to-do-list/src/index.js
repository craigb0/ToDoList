import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import {PublicClientApplication, EventType} from "@azure/msal-browser";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {msalConfig} from "./authConfig.js";
import Layout from "./pages/Layout";
import Main from "./pages/Main";

// const msalInstance = new PublicClientApplication(msalConfig);

// // Default to using the first account if no account is active on page load
// if (
// 	!msalInstance.getActiveAccount() &&
// 	msalInstance.getAllAccounts().length > 0
// ) {
// 	// Account selection logic is app dependent. Adjust as needed for different use cases.
// 	msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
// }

// msalInstance.addEventCallback((event) => {
// 	if (
// 		(event.eventType === EventType.LOGIN_SUCCESS ||
// 			event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
// 			event.eventType === EventType.SSO_SILENT_SUCCESS) &&
// 		event.payload.account
// 	) {
// 		msalInstance.setActiveAccount(event.payload.account);
// 	}
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Main />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
