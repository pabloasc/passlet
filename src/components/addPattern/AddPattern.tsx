import React, { Fragment, useState } from "react";
import axios from "axios";

export interface IBasePattern {
    userId: string;
    service: string;
    pattern: string;
}

const defaultValues: IBasePattern = {
    userId: "notSet",
    service: "",
    pattern: "",
};

type MyFunctionType = (refresh: boolean) => boolean;

type AddPatternProps = {
    callBack: MyFunctionType;
};

const AddPattern: React.FC<AddPatternProps> = (props: AddPatternProps) => {
    const [formValue, setFormValue] = useState(defaultValues as IBasePattern);
    const [reload, setReload] = useState(true);

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:3030/api/pattern", formValue).then((data) => {
            setReload(!reload);
            props.callBack(reload);
            console.log(data);
        });
        setFormValue(defaultValues);
        return true;
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    return (
        <Fragment>
            <div className="row">
                <div className="col s12 m12">
                    <div className="card darken-1">
                        <div className="card-content black-text">
                            <h4>Add pattern</h4>
                        </div>
                        <div className="card-action">
                            <div className="group">
                                <form className="form-edit" onSubmit={onFormSubmit}>
                                    Website / Service:
									<input
                                        type="text"
                                        name="service"
                                        value={formValue.service}
                                        onChange={onInputChange}
                                    />
                                    Base Words:
                                    <input
                                        type="text"
                                        name="pattern"
                                        value={formValue.pattern}
                                        onChange={onInputChange}
                                    />
                                    <div className="form-row">
                                        <input type="submit" value="Add new pattern" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AddPattern;
