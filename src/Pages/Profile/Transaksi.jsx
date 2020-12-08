import { Card, Col, Row } from "react-bootstrap";
import "./Transaksi.css";
import ways from "../../assets/ways-sm.svg";
import qr from "../../assets/qr.svg";

function Transaksi({ trans }) {
  return (
    <div styke={{ marginleft: 10 }} key={trans.id}>
      <Card className="box-trans">
        <Card.Img className="trans-img" variant="left" src={trans.img} />
        <Card.Body>
          <Card.Text className="trans-title">{trans.title}</Card.Text>
          <Card.Text className="day-date">
            {trans.day}, {trans.date}
          </Card.Text>
          <Card.Text className="trans-price">Rp. {trans.price}</Card.Text>
          <Card.Text className="trans-qty">Qty : {trans.qty}</Card.Text>
          <Card.Text className="trans-total">
            Subtotal : {trans.total}
          </Card.Text>
          <Card.Text className="action">{trans.action}</Card.Text>
        </Card.Body>
        <Card.Img className="trans-ways" src={ways} />
        <Card.Img className="qr" src={qr} />
      </Card>
    </div>
  );
}

export default Transaksi;
