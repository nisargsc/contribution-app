const Layout = ({children}) => {
    return (
        <div className="grid grid-cols-home-1 sm:grid-cols-home-3 bg-cyan-400 h-full">
            <div className=""></div>
            <div className="content">
                {children}
            </div>
            <div className=""></div>
        </div>
        )
    }
    
export default Layout;