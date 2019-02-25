import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css-scss/Header.css";
import { connect } from "react-redux";

const main = "/main";
const board = "/boards";


/*

    I'm thinking I need to wire up redux and then track the default and then when there is a click. or what route I'm on... 
    send a dispatch to update the and highlight the current viewed page

*/


class Header extends React.Component {


    private pathName : string;

    constructor(props:any) {
        super(props);
        this.pathName = window.location.pathname;

    }



    makingCurrent = () => <span className="sr-only">(current)</span>;

    isCurrent = (is:boolean) => is ? this.makingCurrent() : "";

    handleHeaderClick = (where:string) => {
        this.pathName = where;
        console.log(this.pathName);
    }

    componentWillMount() {
        this.pathName = window.location.pathname;
    }

    render() {
        console.log(this.pathName);
        
        return (
            <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">Fixed navbar</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className={"nav-item" + (this.pathName===main) ? "active" : ""}>
                    <Link
                    onClick={() => this.handleHeaderClick(main) } 
                    className="nav-link" 
                    to={main}>Home { this.isCurrent(this.pathName===main) } </Link>
                    </li>
                    <li className={"nav-item" + (this.pathName===board) ? "active" : ""}>
                    <Link
                    onClick={() => this.handleHeaderClick(board) } 
                    className="nav-link" 
                    to={board}>Board { this.isCurrent(this.pathName===board) } </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled={"true"}>Disabled</a>
                    </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
            </header>
        );
    }
}


export default connect((state:any, props:any) => {
    console.log(state);
    return {
        current : state.headerReducer
    }
})(Header);