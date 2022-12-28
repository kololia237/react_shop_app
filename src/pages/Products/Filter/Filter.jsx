import React, {useContext, useState} from "react";
import {FilterDispath} from "../../../components/Context/ContextFilter";
import "./Filter.css";



export default function Filter() {

    const {dispath} = useContext(FilterDispath);
    return (
        <div className="filter_container">
            <div className="filter_btnBox">
                <button onClick={() => dispath({type: "ALL"})} className="filter_btn">
                    Все
                </button>
                <button
                    onClick={() => dispath({type: "VEGETABLE"})}
                    className="filter_btn"
                >
                    Овочі
                </button>
                <button
                    onClick={() => dispath({type: "FRUIT"})}
                    className="filter_btn"
                >
                    Фрукти
                </button>
                <button
                    onClick={() => dispath({type: "NUTS"})}
                    className="filter_btn"
                >
                    Горіхи
                </button>
                <button
                    onClick={() => dispath({type: "BEANS"})}
                    className="filter_btn"
                >
                    Боби
                </button>
                <select className="filter_btnBox filter_btn" onChange={() => dispath({type: "SORT"})}>
                    <option value="" hidden>Сортування</option>
                    <option>
                        <button value="SORT"  className="filter_btn"> Від дешевого до дорогого </button>
                    </option>
                </select>
            </div>
        </div>
    );
}
