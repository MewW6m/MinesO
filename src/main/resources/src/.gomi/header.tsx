import React from "react";
import logoImg from "./logoImg";
import logoTitle from "./logoTitle";
import logoSubTitle from "./logoSubTitle";


class CommonHeader extends React.Component {
    render() {
        return (
            <div>
                <div
                    uk-sticky="media: 0"
                    className="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed"
                >
                    <div className="uk-container uk-container-expand">
                        <nav className="uk-navbar">
                            <div className="uk-navbar-left">
                                <a
                                    href="../"
                                    className="uk-navbar-item uk-logo uk-grid-column-small"
                                >
                                    { logoImg }
                                    { logoTitle }
                                    { logoSubTitle }
                                </a>
                            </div>
                            <div className="uk-navbar-right">
                                <a
                                    href=""
                                    uk-icon="icon: menu"
                                    uk-toggle="target: #offcanvas-push"
                                ></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommonHeader;
