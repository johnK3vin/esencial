import { notFound } from "next/navigation";

const products = [
  { id: "1", name: "Producto 1", image: "https://via.placeholder.com/150", description: "Descripción del producto 1", price: "$100" },
  { id: "2", name: "Producto 2", image: "https://via.placeholder.com/150", description: "Descripción del producto 2", price: "$200" },
  { id: "3", name: "Producto 3", image: "https://via.placeholder.com/150", description: "Descripción del producto 3", price: "$300" },
];

export default function ProductDetail({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound(); // Muestra una página 404 si no se encuentra el producto

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-bold">{product.price}</p>
    </div>
  );
}