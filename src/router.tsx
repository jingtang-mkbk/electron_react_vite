import FoundMusic from './pages/FoundMusic';
import Blog from './pages/Blog';
import Video from './pages/Video';
import Follow from './pages/Follow';
import Live from './pages/Live';
import PrivateFM from './pages/PrivateFM';

const router = [
  {
    path: '/',
    element: <FoundMusic />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },

  {
    path: '/video',
    element: <Video />,
  },
  {
    path: '/follow',
    element: <Follow />,
  },
  {
    path: '/live',
    element: <Live />,
  },
  {
    path: '/privateFM',
    element: <PrivateFM />,
  },
];

export default router;
