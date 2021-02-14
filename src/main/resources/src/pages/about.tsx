import React from "react";

import {CommonHead, CommonHeadProps} from "../components/templates/commons/head";
import {About} from "../components/templates/About/About";

// MinesO - 利用サービス一覧管理

class TopPage extends React.Component{
    render(){
        return (
            <>
                <CommonHead />
                <About />
            </>
        );
    }
}
export default TopPage;