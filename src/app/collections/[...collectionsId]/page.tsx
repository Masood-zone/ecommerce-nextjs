import React from "react";

export default function Collection({ params }: { params: { id: string } }) {
  const id = params.id;
  return <div>This is Collection {id}</div>;
}
