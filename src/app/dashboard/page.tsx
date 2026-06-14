"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {

    const interval = setInterval(async () => {

      const res = await fetch("/api/latest");

      const data = await res.json();

      if (data.success) {

        setProduct(data.product);
      }

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="min-h-screen flex items-center justify-center">

      {product && (

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <h2 className="text-2xl mt-4">
            {product.compound}
          </h2>

          <p className="mt-2">
            {product.formula}
          </p>

          {/* VIDEO */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-72 mx-auto mt-6"
          >
            <source
              src={product.media_url}
              type="video/mp4"
            />
          </video>

          {/* AUDIO */}
          <audio autoPlay>
            <source
              src={product.audio_url}
              type="audio/mpeg"
            />
          </audio>

        </div>
      )}

    </div>
  );
}