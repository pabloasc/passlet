import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FirebaseAuth } from "./components/firebaseAuth/FirebaseAuth";
import { UserContext } from "./auth/UserContext";

import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

const App: React.FC = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <BrowserRouter>
            <Navbar />
            {user && user.displayName ? (
                <div>
                    {JSON.stringify(user)}
                    <button
                        type="button"
                        onClick={logout}
                        style={{ paddingLeft: "20px" }}
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                    <FirebaseAuth />
                )}
            <div className="container">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
