import React from 'react';

const DownloadApp = () => {
    return (
        <div id="C_H_DownloadApp_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 contents">
                        <h5>Download aplikasi<br/>
                            Sahara Sekarang!</h5>

                        <div className="downloadApp_imgs">
                            <img src="/Assets/Google Stor with.png" alt="" />
                            <img src="/Assets/appStore with.png" alt="" />
                            <img src="/Assets/AppGallery With.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 img-phone text-center">
                        <img src="/Assets/Device 2.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;