import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Trangchu/Footer/Footer'
import "./Hotel.css"
import img2 from "../../images/2.jpg"
import img4 from "../../images/3.jpg"
import img5 from "../../images/4.jpg"
import img10 from "../../images/5.jpg"
import img11 from "../../images/7.jpg"
import img12 from "../../images/8.jpg"
export default function Hotel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div id="hotel">
            <div className="breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
                        <li className="breadcrumb-item">Khách sạn</li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="heading text-center">
                    <span>Khách sạn</span>
                </div>
                <div className="content row">
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>vinpeart resort & spa đà nẵng</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">7.084.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><Link to="/detailhotel/3">Book ngay</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img11} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>Nhím house</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">550.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><Link to="/detailhotel/3">Book ngay</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img10} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>Hạ Long Central</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">450.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><Link to="/detailhotel/3">Book ngay</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img12} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>The Myst Dong Khoi</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">8.000.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><Link to="/detailhotel/3">Book ngay</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>Phong Nha river house</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">500.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><Link to="/detailhotel/3">Book ngay</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content___box">
                            <div className="content___box---img">
                                <img src={img5} alt="" />
                            </div>
                            <div className="content___box---title">
                                <div className="content___box---title---name">
                                    <span>Ninh Bình Retreat</span>
                                </div>
                                <div className="content___box---title---price">
                                    <span>Giá từ: <span className="price-text">800.000 vnđ</span></span>
                                </div>
                            </div>
                            <div className="content___box---btn">
                                <button><Link to="/detailhotel/3">Book ngay</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
