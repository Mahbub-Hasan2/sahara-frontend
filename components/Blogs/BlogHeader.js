import React from 'react';

const BlogHeader = () => {
    return (
        <div id="C_B_blogHeader_area">
            <div className="container">
                <div className="head_line">
                    <img src="https://i.imgur.com/CMWLtKS.png" alt="" className="img-fluid" />
                    <div className="overlay">
                        <h5>Bantu Modal Bergulir Warung Binaan<br /> melalui Sahara Dermawan</h5>
                        <p>Max 16min read</p>
                    </div>
                </div>
                <div className="blogs">
                    <button className="btn btn-white shadow-1 active-color">News</button>
                    <button className="btn btn-white shadow-1">Blog</button>
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-6">
                            <div className="card shadow-0">
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img
                                        src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="card-body">
                                    <button className="shadow-1 category-btn">blog</button>
                                    <h5 className="card-title">Bantu Modal Bergulir Warung Binaan melalui Sahara Dermawan</h5>
                                    <p className="card-text">
                                        Wabah Pandemi COVID-19 tengah melanda dunia. Di Indonesia berdampak sangat serius, terutama...
                                    </p>
                                    <p className="card-footer-text">Max 16min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;