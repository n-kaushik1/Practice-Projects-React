import "./Body.css";

const Body = () => {
  return (
    <main className="main-body">
      <span className="content">
        <div id="heading">
          <h1>YOUR FEET DESERVE THE BEST</h1>
        </div>
        <p className="para">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="cont-bt">
          <button className="shop">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div>
          Also available on
          <br />
          <img src="/img/shops.png" alt="shopping sites logo" id="sites-logo" />
        </div>
      </span>
      <span className="img">
        <img src="/img/shoe_image.png" alt="Shoe" />
      </span>
    </main>
  );
};

export default Body;
