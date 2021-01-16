import {Link} from "react-router-dom";
import '../../css/Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="row justify-content-center py-5 Footer">
                <div className="col-11">
                <div className="row">
                        <div className="col-xl-8 col-md-4 mb-5 col-sm-4 col-12">
                            <h3 className=" mb-md-0  bold-text">MovieTime.</h3>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-12 logoItem">
                        <img  src="https://dl.dropboxusercontent.com/s/vx8n6h25qj5dgwn/logo.png?dl=0" alt="logo"/>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 className="mb-3 mb-lg-4 bold-text  "><b>MENU</b></h6>
                            <ul className="list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/movie">Movie</Link></li>
                                <li><Link to="/setting/profile">Profile</Link></li>
                                <li><Link to="/setting/wishlist">Wishlist</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                            <h6 className="mb-3 mb-lg-4  bold-text mt-sm-0 mt-5"><b>Description</b></h6>
                            <p className="mb-1 text-muted">List of all movies</p>
                            <p className="text-muted">and actors so that you can choose what to watch</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-xl-8 col-md-4 col-sm-4 col-auto mt-5 order-sm-1 order-3 align-self-end">
                            <p className="social  mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> MovieTime All Rights Reserved.</small>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                            <h6 className="mt-55 mt-2  bold-text"><b>Mukul Prasad</b></h6><small className="text-muted"> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> Mukul@gmail.com</small>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3">
                            <h6 className=" bold-text"><b>Amit Kumar Tomar</b></h6><small className="text-muted"><span><i className="fa fa-envelope" aria-hidden="true"></i></span> Amit@gmail.com</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer