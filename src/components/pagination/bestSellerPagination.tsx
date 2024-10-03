"use client";
import React, { useState, useEffect } from "react";
import { ProductCard } from "../cards";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function BestSellerPagination({ products }: { products: ProductInfo[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProductsPerPage(2);
      } else {
        setProductsPerPage(4);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 3;
    const halfMaxButtons = Math.floor(maxButtons / 2);

    let startPage = Math.max(1, currentPage - halfMaxButtons);
    let endPage = Math.min(totalPages, currentPage + halfMaxButtons);

    if (currentPage <= halfMaxButtons) {
      endPage = Math.min(totalPages, maxButtons);
    } else if (currentPage + halfMaxButtons >= totalPages) {
      startPage = Math.max(1, totalPages - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-1 sm:px-4 sm:py-2 mx-1 ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          {i}
        </Button>
      );
    }

    if (startPage > 1) {
      buttons.unshift(
        <span key="start-ellipsis" className="px-2 py-1 sm:px-4 sm:py-2 mx-1">
          ...
        </span>
      );
      buttons.unshift(
        <Button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-2 py-1 sm:px-4 sm:py-2 mx-1 rounded-md ${
            currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          1
        </Button>
      );
    }

    if (endPage < totalPages) {
      buttons.push(
        <span key="end-ellipsis" className="px-2 py-1 sm:px-4 sm:py-2 mx-1">
          ...
        </span>
      );
      buttons.push(
        <Button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-2 py-1 sm:px-4 sm:py-2 mx-1 ${
            currentPage === totalPages
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
        >
          {totalPages}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <>
      {/* Best seller cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {selectedProducts.map((product: ProductInfo) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center mt-4 gap-1 sm:gap-3">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          variant="secondary"
          disabled={currentPage === 1}
          className="px-2 py-1 sm:px-4 sm:py-2"
        >
          <ChevronLeft />
        </Button>
        {renderPaginationButtons()}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="default"
          className="px-2 py-1 sm:px-4 sm:py-2"
        >
          <ChevronRight />
        </Button>
      </div>
    </>
  );
}

export default BestSellerPagination;
