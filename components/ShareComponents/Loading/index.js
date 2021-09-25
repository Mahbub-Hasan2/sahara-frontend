import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

const Loading = () => {
    const [loading, setLoading] = React.useState(true);

    return (
        <div id="C_S_loading_area" style={{ height: "100vh" }}>
            <RingLoader color="#24B668" loading={loading} size={60} />
            <h5 className="mt-5">Loading..</h5>

            <style jsx>
                {`
                #C_S_loading_area{
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
                h5{
                    color: #24B668;
                }
                `}
            </style>
        </div>
    );
};

export default Loading;