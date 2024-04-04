
import { Outlet, NavLink } from 'react-router-dom'

function About() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>

            <NavLink to='/about/email'>联系方式</NavLink>
            <NavLink to='/about/tel'>电话号码</NavLink>
            <Outlet />

        </div>
    )
}

export default About