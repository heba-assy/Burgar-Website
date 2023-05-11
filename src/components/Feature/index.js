import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

function Feature() {
  return (
    <FeatureContainer>
        <h1>Burger of the Day</h1>
        <p>Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.</p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature;