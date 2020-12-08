import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListP.css";

function ListP({ product }) {
  return (
    <Link to={`/detail/${product.id}`} className="text-decoration-none">
      <Col key={product.id}>
        <Card className="c-list-card">
          <Card.Img
            className="c-list-card-img"
            variant="top"
            src={product.img}
          />
          <Card.Body>
            <Card.Text className="c-list-card-title">{product.title}</Card.Text>
            <Card.Text className="c-list-card-price">
              Rp.{product.Price}
            </Card.Text>
            <Card.Text className="c-list-card-stock">
              Stock : {product.stock}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
}

export default ListP;
