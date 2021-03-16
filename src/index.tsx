import React from "react";
import ReactDOM from "react-dom";
import { FirebaseProvider } from "./auth/FirebaseProvider";
import { UserProvider } from "./auth/UserContext";

import "./index.css";

import App from "./App";

ReactDOM.render(
    <FirebaseProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </FirebaseProvider>,
    document.getElementById("root")
);
