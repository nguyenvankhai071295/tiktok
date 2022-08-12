import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layout/defaultLayout/index';
function App() {
    return (
        <Router>
            <div className="App">
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
            </div>
        </Router>
    );
}

export default App;
