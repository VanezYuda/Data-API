import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductList from "../components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Gagal mengambil produk:", error);
      }
    };

    fetchData();
  }, []);

  return <ProductList products={products} />;
}
