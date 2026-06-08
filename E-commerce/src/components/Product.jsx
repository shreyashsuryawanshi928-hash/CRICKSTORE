import { Navbar } from "./Navbar";

export function Product({ setPage }) {
  const products = [
    {
      id: 1,
      name: "Cricket Bat",
      price: "₹2000",
      image:
        "https://m.media-amazon.com/images/I/5192JkZ0RXL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "Cricket Ball",
      price: "₹800",
      image:
        "https://images.mykhel.com/img/2020/07/dukes-ball-1593668666.jpg",
    },
    {
      id: 3,
      name: "Batting Gloves",
      price: "₹500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_RJBTv3Qb5ZQ8lT5AHR2af2z00ei5zBVig&s",
    },
    {
      id: 4,
      name: "Helmet",
      price: "₹400",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFjrb83_2blLq98U-oonOUB3NSU5JaX3-Dw&s",
    },
    {
      id: 5,
      name: "Cricket Bat",
      price: "₹2000",
      image:
        "https://m.media-amazon.com/images/I/5192JkZ0RXL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 6,
      name: "Cricket Ball",
      price: "₹800",
      image:
        "https://images.mykhel.com/img/2020/07/dukes-ball-1593668666.jpg",
    },
    {
      id: 7,
      name: "Batting Gloves",
      price: "₹500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_RJBTv3Qb5ZQ8lT5AHR2af2z00ei5zBVig&s",
    },
    {
      id: 8,
      name: "Helmet",
      price: "₹400",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFjrb83_2blLq98U-oonOUB3NSU5JaX3-Dw&s",
    },
  ];

  return (
    <>
      <Navbar setPage={setPage} />

      <div className="products">
        <h1>Our Products</h1>

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}