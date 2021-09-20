import React from 'react';

const JoinNow = () => {
    return (
        <div id="C_J_joinNow_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md">
                        <h4>Gabung sekarang</h4>
                        <form>
                            <div className="form-group">
                                <label required htmlFor="formGroupExampleInput">NAME</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Namamu" />
                            </div>
                            <div className="form-group">
                                <label required htmlFor="formGroupExampleInput2">Nomor Whatsapp</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="+62" />
                            </div>
                            <div className="form-group">
                                <label required htmlFor="formGroupExampleInput2">Lokasi</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Lokasimu" />
                            </div>
                            <button type="submit" className="btn btn-success btn-rounded">Gabung Sekarang</button>
                        </form>
                    </div>
                    <div className="col-md img">
                        <div>
                            <img src="https://i.imgur.com/dWAY30j.png" alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinNow;