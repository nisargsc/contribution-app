const Layout = ({children}) => {
    return (
        <div className="grid grid-cols-home-sm sm:grid-cols-home-md md:grid-cols-home-lg min-h-screen bg-cyan-400">
            <div className=""></div>
            <div className="content">
                {children}
            </div>
            <div className=""></div>
        </div>
        )
    }
    
export default Layout;