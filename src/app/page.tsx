"use client";

import { useEffect, useState } from "react";

interface Product {
  name: string;
  description: string;
  image_url: string;
  audio_url: string;
}

export default function DashboardPage() {

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {

    fetch("/api/latest")
      .then((res) => res.json())
      .then((data) => {

        console.log(data);

        if (data.success) {
          setProduct(data.product);
        }

      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  if (!product) {

    return (

      <div
        style={{
          background: "#111",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem"
        }}
      >

        Waiting for RFID scan...

      </div>

    );

  }

  return (

    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "40px"
      }}
    >

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <img
        src={product.image_url}
        alt={product.name}
        width={300}
      />

      <audio controls autoPlay>
        <source
          src={product.audio_url}
          type="audio/mpeg"
        />
      </audio>

    </div>

  );

}