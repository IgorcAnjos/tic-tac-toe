import { Route, Routes, BrowserRouter } from 'react-router-dom';
import routeList from './routList';

export default function Root() {
	return (
		<BrowserRouter>
			<Routes>
				{routeList.map((routeInfo) => {
					return (
						<Route
							key={routeInfo.pathName}
							path={routeInfo.pathName}
							element={routeInfo.element}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
}
