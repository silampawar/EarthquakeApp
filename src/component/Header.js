import React from "react";

/** A functional component for header.**/
export default function Header() {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <img src="/internet.svg" width="30" height="30"
                        className="d-inline-block align-top" alt="" />
                    <div>Earthquake App</div>
                </a>
            </nav>
        </>
    );
}