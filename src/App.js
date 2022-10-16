import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/defaultLayout/index';
function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((e, key) => {
                    const Layout = e.layout || DefaultLayout;
                    const Page = e.element;
                    return (
                        <Route
                            key={key}
                            path={e.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
