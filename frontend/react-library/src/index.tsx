import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51NnDEGK1DVQK3ncMPE1wVlxjmKlPTYi5pRSKJ9NtwBvD8TOG4fVHoN56LpEOiCbBZhcDw41PWFKSO7oMbUf9P9VF00n4FYKSqQ');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
      <Elements stripe={stripePromise}>
          <App />
      </Elements>
  </BrowserRouter>
);
