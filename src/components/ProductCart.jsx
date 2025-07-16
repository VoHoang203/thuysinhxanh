import { Heart, Star } from "lucide-react";

export const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const ProductCard = ({ product }) => (
  <div className="border rounded-lg overflow-hidden text-center group min-h-[360px]">
    <div className="relative bg-gray-100">
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-full object-cover max-h-[200px]"
      />
      <div className="absolute top-2 right-2 bg-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4 text-gray-600" />
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-medium h-10 mb-2">{product.name}</h3>
      <div className="flex justify-center mb-2">
        <StarRating rating={product.numReviews} />
      </div>
      <p className="text-red-600 font-bold">{product.price}</p>
    </div>
  </div>
);

export default ProductCard;
