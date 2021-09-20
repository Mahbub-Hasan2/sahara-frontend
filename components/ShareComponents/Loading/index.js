import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

const Loading = () => {
    const [loading, setLoading] = React.useState(true);
    return (
        <div className="text-center" style={{height: "100%"}}>
            <RingLoader color="#24B668" loading={loading} size={60} />
            {/* <h5 className="mt-5">Loading..</h5> */}
        </div>
    );
};

export default Loading;