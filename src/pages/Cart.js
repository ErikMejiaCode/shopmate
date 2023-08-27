import { CartCard } from "../components";

export const Cart = () => {
  const products = [
    {
      "id": 1,
      "name": "Sony Wh-Ch510 Bluetooth Wireless",
      "price": 149,
      "image": "/assets/images/headphone1.jpg",
    },
    {
      "id": 2,
      "name": "boAt Rockerz 450",
      "price": 49,
      "image": "/assets/images/headphone2.jpg",
    },
  ];

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>

        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
