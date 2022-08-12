import Header from '~/layout/components/Header';
function Layout1Column({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default Layout1Column;
