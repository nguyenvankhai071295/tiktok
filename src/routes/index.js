import Home from '~/pages/HomePage';
import Folowing from '~/pages/FollowingPage';
import Layout1Column from '~/layouts/Layout1Column';
import Upload from '~/pages/UploadPage';
import Live from '~/pages/LivePage';
import Search from '~/pages/SearchPage';
import Profile from '~/pages/ProfilePage';
import Message from '~/pages/Message';
import Inbox from '~/pages/InboxPage';
import Feedback from '~/pages/Feedback/Feedback';
import routesConfig from '~/components/config/routes';
//Public routes
const publicRoutes = [
    { path: routesConfig.home, element: Home },
    { path: routesConfig.following, element: Folowing },
    { path: routesConfig.upload, element: Upload, layout: Layout1Column },
    { path: routesConfig.live, element: Live, layout: Layout1Column },
    { path: routesConfig.search, element: Search, layout: Layout1Column },
    { path: routesConfig.profile, element: Profile, layout: Layout1Column },
    { path: routesConfig.message, element: Message },
    { path: routesConfig.inbox, element: Inbox },
    { path: routesConfig.feedback, element: Feedback },
];

//Private routes

const privateRoutes = [];

export { publicRoutes, privateRoutes };
