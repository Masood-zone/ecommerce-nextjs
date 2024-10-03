interface ProductInfo {
  id: number;
  name: string;
  price: number;
  title: string;
  images: string[];
  description: string;
  category: {
    id: number;
    name: string;
  };
}

interface Category {
  id: number;
  name: string;
  image: string;
}
