import React from "react";
import {Top} from "../components/templates/Top/Top";
import {CommonHead, CommonHeadProps} from "../components/templates/commons/head";

// MinesO - 利用サービス一覧管理

class TopPage extends React.Component{
    render(){
        return (
            <>
                <CommonHead />
                <Top />
            </>
        );
    }
}
export default TopPage;