import React from 'react';

import { StateProvider } from '../store';
import { CheckoutPage } from './checkout';

export const IndexPage = () => {
  return (
  <StateProvider>
    <CheckoutPage />
  </StateProvider>)
}
