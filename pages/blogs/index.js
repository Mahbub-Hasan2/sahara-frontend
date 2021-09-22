import React from 'react';
import Link from 'next/link';

const blogFakeData = [
    { img: "https://i.imgur.com/bfhGd5n.png" },
    { img: "https://i.imgur.com/NuZkNbR.png" },
    { img: "https://i.imgur.com/sYJPM2A.png" },
    { img: "https://i.imgur.com/bfhGd5n.png" },
    { img: "https://i.imgur.com/NuZkNbR.png" },
    { img: "https://i.imgur.com/sYJPM2A.png" },
    { img: "https://i.imgur.com/bfhGd5n.png" },
    { img: "https://i.imgur.com/NuZkNbR.png" },
    { img: "https://i.imgur.com/sYJPM2A.png" },
]
const BlogsPage = () => {

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

                        {blogFakeData.map((blog, index) => (
                            <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                                <div className="card shadow-0">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img
                                            src={blog.img}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="card-body">
                                        <button className="shadow-1 category-btn">blog</button>
                                        <Link href={'/blogs/[id]'} as={`/blogs/1`}>
                                            <a>
                                                <h5 className="card-title">Bantu Modal Bergulir Warung Binaan melalui Sahara Dermawan</h5>
                                            </a>
                                        </Link>
                                        <p className="card-text">
                                            Wabah Pandemi COVID-19 tengah melanda dunia. Di Indonesia berdampak sangat serius, terutama...
                                        </p>
                                        <p className="card-footer-text">Max 16min read</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;