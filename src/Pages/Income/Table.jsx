import React, {useState} from "react";
import "./Table.css";

import { SUCCESS, UNSUCCESS } from './../../configs/icons';
import DataTransaction from './../../data/income.json';

function TableIncome() {
  console.log(DataTransaction.data.transactions[0].products[0]);

  const [statusAction, setStatusAction] = useState("");

  const handleStatus = (status) => {
    if(status === "Success") {
      return "success"
    } else if(status === "Cancel") {
      return "cancel"
    } else if(status === "On The Way") {
      return "on-the-way"
    } else if(status === "Waiting Approve") {
      return "waiting-approve"
    }
  }

  const handleAction = (status) => {
    if(status === "Success") {
      return (
        <div><img src={SUCCESS} alt="success"/></div>
      )
    } else if(status === "Cancel") {
      return (
        <div><img src={UNSUCCESS} alt="cancel"/></div>
      )
    } else if(status === "On The Way") {
      return (
        <div><img src={SUCCESS} alt="on-the-way"/></div>
      )
    } else if(status === "Waiting Approve") {
      return (
        <>
          <button className="btn-action cancel">Cancel</button>
          <button className="btn-action success">Approve</button>
        </>
      )
    }
  }

  return (
    <table className="table-income" border="2" >
      <tr className="head">
        <th>No</th>
        <th>Nama</th>
        <th>Address</th>
        <th>Post Code</th>
        <th>Product Order</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      {DataTransaction.data.transactions.map((value, i) => {
        return (
          <tr>
            <td>{i+1}.</td>
            <td>{value.name}</td>
            <td>{value.address}</td>
            <td>{value.phone}</td>
            <td>
              {value.products.map(product => (
                <ul>
                  <li>{product.name}</li>
                </ul>
              ))}
            </td>
            <td className={handleStatus(value.status)} >{value.status}</td>
            <td className="action-table" >{handleAction(value.status)}</td>
          </tr>
        )
      })}
    </table>
  );
}

export default TableIncome;
