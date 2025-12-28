import { useState, useEffect } from "react";
import ProductDetailModal from "./ProductDetailModal";

export default function ProductList({ products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [pencarian, setPencarian] = useState("");
  const [produkFilter, setProdukFilter] = useState([]);

  useEffect(() => {
    const keyword = pencarian.toLowerCase();

    const hasil = products.filter((produk) =>
      produk.title.toLowerCase().includes(keyword) ||
      produk.description.toLowerCase().includes(keyword)
    );

    setProdukFilter(hasil);
  }, [products, pencarian]);

  const bukaModal = (produk) => {
    setSelectedProduct(produk);
    setIsOpen(true);
  };

  const tutupModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Daftar Produk</h1>
        <p className="text-gray-600 mb-6">Jelajahi koleksi produk kami</p>

        <input
          type="text"
          placeholder="Cari produk..."
          value={pencarian}
          onChange={(e) => setPencarian(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border rounded-lg mb-6"
        />

        {produkFilter.length === 0 ? (
          <p className="text-gray-500 text-center">Produk tidak ditemukan</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {produkFilter.map((produk) => (
              <div key={produk.id} className="border rounded-lg p-4 shadow">
                <img
                  src={produk.thumbnail}
                  alt={produk.title}
                  className="h-40 w-full object-cover mb-3"
                />
                <h3 className="font-bold">{produk.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {produk.description}
                </p>
                <button
                  onClick={() => bukaModal(produk)}
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
                >
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <ProductDetailModal
        isOpen={isOpen}
        product={selectedProduct}
        onClose={tutupModal}
      />
    </div>
  );
}
