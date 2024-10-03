"use server";
import axios from "axios";
import { notFound } from "next/navigation";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getLatestProducts = async (params: {
  limit: string;
  offset: string;
}) => {
  try {
    const response = await api.get(
      `/products/?limit=${params.limit}&offset=${params.offset}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching latest products:", error);
    throw error;
  }
};

// Add pagination implementation here
export const getBestSellerProducts = async () => {
  try {
    const response = await api.get("/products/?offset=0");
    return response.data;
  } catch (error) {
    console.error("Error fetching best seller products:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await api.get(`/products/${id}`);
    if (!response.data) notFound();
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

export const getProductCategoryById = async (id: number) => {
  try {
    const response = await api.get(`/categories/${id}/products`);
    if (!response.data) notFound();
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    throw error;
  }
};
