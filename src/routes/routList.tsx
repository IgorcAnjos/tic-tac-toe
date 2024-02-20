import GamePage from '../pages/game';
// import Home from '../pages/home';
import { IRouteInfo } from '../types/IRoutes';

const routList: IRouteInfo[] = [
	{
		pathName: '/',
		description: '',
		element: <GamePage />,
	},
	{
		pathName: '/game',
		description: '',
		element: <GamePage />,
	},
];

export default routList;
