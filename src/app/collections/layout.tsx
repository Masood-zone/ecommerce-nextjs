import React from "react";

export default function ShopCollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      {/* Shop Banner */}
      <section>Shop Banner</section>
      {children}
    </article>
  );
}
