import React from 'react';
import '../ShimmerEffect.css';

const ShimmerEffect = () => {
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerEffect;
