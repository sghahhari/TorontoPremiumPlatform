import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { resolveImageUrl } from '@/utils/resolveImageUrl';

export default function ProductCard({ product }) {
  const [imgSrc, setImgSrc] = useState(() => resolveImageUrl(product.image));

  return (
    <Link
      to={createPageUrl(`ProductDetail?id=${product.id}`)}
      className="group block"
    >
      <div className="aspect-square overflow-hidden rounded-2xl bg-[#ECE6D6] mb-4">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={() => setImgSrc(PLACEHOLDER)}
        />
      </div>
      <div className="px-1">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-[#1F4235] mb-1">
          {product.category}
        </p>
        <h3
          className="font-semibold text-[#16231D] group-hover:text-[#1F4235] transition-colors duration-200 leading-snug mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {product.name}
        </h3>
        <p className="text-base font-bold text-[#16231D]">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
