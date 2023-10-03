import { Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Card className="border-start border-danger border-5 border-bottom-0 border-top-0 border-end-0 shadow rounded-5 p-4 news-card">
      <Card.Body>
        <p className="m-0 text-secondary">{props.date}</p>
        <h5 className="text-primary">{props.title}</h5>
        <span>{props.value}</span>
      </Card.Body>
    </Card>
  );
};
export default Cards;
