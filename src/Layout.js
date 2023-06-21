import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const Layout = ({ width, search, setSearch }) => {
    return (
        <div className="App">
            <Header title="G-Blogs" width={width} />
            <Nav search={search} setSearch={setSearch} />
	        <Outlet />
            <Footer />
        </div>
    )
}
export default Layout