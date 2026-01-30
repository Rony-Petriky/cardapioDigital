import Image from "next/image";
import { Product } from "@/types/Product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="rounded-lg object-cover"
      />
      <h3 className="font-bold text-lg mt-4">{product.name}</h3>
      <p className="text-blue-600 font-semibold text-xl">{product.price}</p>
    </div>
  );
}
