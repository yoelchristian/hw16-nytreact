import React from "react";

const Results = props =>
    <div className="container">
        <li className="list-group-item">
            <h5>
                <span><strong>{props.title}</strong></span>
                <span className="btn-group pull-right">
                    <a href={props.url} target="_blank">
                        <button className="btn btn-default">View Article</button>
                    </a>
                    <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save Article</button>
                </span>
                <p>Date Published: {props.date}</p>
            </h5>
        </li>
    </div>

export default Results;