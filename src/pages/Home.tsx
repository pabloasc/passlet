import React, { Fragment } from "react";
import ListPatterns from "../components/listPatterns/ListPatterns";
// import Counter from '../components/counter/Counter'

export const Home: React.FC = () => (
    <Fragment>
        <h1>PASSlet</h1>
        <p>
            Keep your password&apos;s safe in one place. Non of your
            passwords is shared with us, they only exist in your mind. PASSle is the
            safest password-management tool.
		</p>
        <ListPatterns />
    </Fragment>
);
