import React from 'react';

import './index.css';
import {IconContext} from "react-icons";
import {FaEye, FaEyeSlash} from "react-icons/fa";

export interface ModalSectionProps {
}

export const ModalSection: React.FC<ModalSectionProps> = ({ }) => (
    <div id="modal-sections" data-uk-modal>
        <div className="uk-modal-dialog" data-uk-overflow-auto>
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
            <div className="uk-modal-body">
                <ul className="uk-child-width-expand" data-uk-tab>
                    <li className="uk-active"><a href="">サインイン</a></li>
                    <li><a href="">サインアップ</a></li>
                </ul>
                <ul className="uk-switcher">
                    <li>
                        <div className="uk-margin">
                            <form className="uk-form">
                                <label className="uk-form-label" htmlFor="form-stacked-text">メールアドレス</label>
                                <div className="uk-form-controls">
                                    <div className="uk-inline">
                                        <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                        <input className="uk-input" type="text" placeholder="user.example@test.com" />
                                    </div>
                                </div>
                                <label className="uk-form-label" htmlFor="form-stacked-text">パスワード</label>
                                <div className="uk-form-controls">
                                    <div className="uk-inline">
                                        <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                                        <div className="uk-form-password">
                                            <input className="uk-input" type="password" placeholder="********" />
                                            <IconContext.Provider value={{ style: { fontSize: '5em' } }}>
                                                <FaEye />
                                                <FaEyeSlash />
                                            </IconContext.Provider>
                                            <a href="#" className="uk-form-password-toggle" onClick={(e)=>this.validate(e)} data-uk-form-password>...</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        <button className="uk-button uk-button-primary" type="button">Save</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);