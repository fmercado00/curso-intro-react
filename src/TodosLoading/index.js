import React from "react";
import './TodosLoading.css'

function TodosLoading({error}){
    return (
        <div className="LoadingTodo-conatiner">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Loading Tasks...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
};

export { TodosLoading };