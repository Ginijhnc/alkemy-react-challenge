import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from './store/store';
const Home = React.lazy(() => import('./pages/Home'));
const DishDetails = React.lazy(() => import('./pages/DishDetails'));
const Search = React.lazy(() => import('./pages/Search'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Login = React.lazy(() => import('./pages/Login'));

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<React.Suspense fallback={null}>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/search' element={<Search />} />
						<Route path='/details/:recipeId' element={<DishDetails />} />
						<Route path='/' element={<Navigate replace to='/login' />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</React.Suspense>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
