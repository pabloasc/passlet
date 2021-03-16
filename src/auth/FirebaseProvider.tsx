import React, { createContext } from "react";
import firebase from "firebase/app";
import app from "./baseAuth";

export interface IFirebaseContext {
    firebase: firebase.app.App;
}

export const FirebaseContext = createContext({} as IFirebaseContext);

const initFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(app);
    }
};

export const FirebaseProvider = ({ children }: any) => {
    initFirebase();

    return (
        <FirebaseContext.Provider
            value={{ firebase: firebase.app() } as IFirebaseContext}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
