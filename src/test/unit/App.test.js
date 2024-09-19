import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App.js';
import store from '../../store';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    </Route>
  )
);

test('renders the App', () => {
  	render(
	<Provider store={store}>
        	<PayPalScriptProvider deferLoading={true}>
        		<RouterProvider router={router} />
        	</PayPalScriptProvider>
      	</Provider>
	);
  //const buttonElement = screen.getByText(/Click me/i);
	const link = screen.getByRole('link', { name: /sign in/i });
	expect(link).toHaveAttribute('href', '/login');

});
