import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import AddPattern from "../addPattern/AddPattern";

export interface IBasePattern {
    _id: number;
    userId: string;
    service: string;
    pattern: string;
}

const ListPatterns: React.FunctionComponent = () => {
    const [data, setData] = useState([] as IBasePattern[]);
    const [reload, setReload] = useState(false);

    const getData = async () => {
        const patterns = await axios.get("http://127.0.0.1:3030/api/patterns");
        setData(patterns.data.data);
    };

    const deletePattern = async (event: any, id: number) => {
        event.persist();
        await axios
            .delete(`http://127.0.0.1:3030/api/pattern/${id}`)
            .then((data_) => {
                getData();
                console.log(data_);
            });
    };

    useEffect(() => {
        getData();
        console.log(reload);
    }, [reload]);

    return (
        <Fragment>
            <div className="row">
                <AddPattern callBack={(status) => { setReload(status); return reload; }} />
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content black-text">
                            <h4>List Patterns</h4>
                        </div>
                        <table>
                            {data.map((pattern) => (
                                <tr>
                                    <td>
                                        <span
                                            role="button"
                                            tabIndex={pattern._id}
                                            onKeyDown={(e) => deletePattern(e, pattern._id)}
                                            onClick={(e) => deletePattern(e, pattern._id)}
                                        >
                                            Delete
                                        </span>
                                    </td>
                                    <td>{pattern.service}</td>
                                    <td>{pattern.pattern}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ListPatterns;
