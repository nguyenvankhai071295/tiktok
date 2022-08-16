import Home from '~/pages/HomePage';
import Folowing from '~/pages/FollowingPage';
import Layout1Column from '~/components/layout/Layout1Column';
import Upload from '~/pages/UploadPage';
import Live from '~/pages/LivePage';
import Search from '~/pages/SearchPage';
import Profile from '~/pages/ProfilePage';
import Message from '~/pages/Message';
import Inbox from '~/pages/InboxPage';
//Public routes
const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Folowing },
    { path: '/upload', element: Upload, layout: Layout1Column },
    { path: '/live', element: Live, layout: Layout1Column },
    { path: '/search', element: Search, layout: Layout1Column },
    { path: '/profile', element: Profile, layout: Layout1Column },
    { path: '/message', element: Message },
    { path: '/inbox', element: Inbox },
];

//Private routes

const privateRoutes = [];

export { publicRoutes, privateRoutes };
