import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Cards() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json)=> setProducts(json.products))
  }, []);

  console.log(products);

  return (
    <div className="row d-flex mt-3 d-flex align-item-center justify-content-center">
 { products?.map((item, i) => (

          <div
            key={i}
            className="col-md-3 m-2"
          >
            <Card className="shadow hiddens" style={{ width: "18rem", cursor:"pointer" }}>
            <Card.Img className="transform" variant="top" style={{height:"150px" , objectFit: "cover"}} src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.brand}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                {item.title.slice(0,20)}
                </Card.Subtitle>
                <hr />
                <Card.Text>
                {item.description.slice(0,30)}
                </Card.Text>
                <button href="#" className="btn btn-dark w-100 text-white">Add to Card</button>
              </Card.Body>
            </Card>
          </div>
        ))}

      </div>
  );
}
