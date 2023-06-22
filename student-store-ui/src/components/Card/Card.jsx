import "./Card.css"

export function Card({ name, image, price }) {
    return (
      <div className="card">
        <img src={image} style={{ width: '100%', height:"250px" }} />
        <div className="row">
          <div className="leftcol">
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <div className="rightcol">
            <p>icons</p>
          </div>
        </div>
      </div>
    );
  }
  

export default Card