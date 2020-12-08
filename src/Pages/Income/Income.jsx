import React from "react";
import { Table, Card, Jumbotron } from "react-bootstrap";
import Header from "../../elements/Header/Header";
import "./income.css";
import TableIncome from "./Table";
import income from "../../data/income.json";

function Income() {
  return (
    <div className="page-income">
      <Header />
      <p className="title">Income transaction</p>
      <div style={{ marginTop: 150 }}>
        <TableIncome />
      </div>
    </div>
  );
}

export default Income;
