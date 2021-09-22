import React from 'react';

const tosFakeData = [
    {
        title: "Conditions of Use",
        description: "We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully."
    },
    {
        title: "Copyright",
        description: "Content published on this website (digital downloads, images, texts, graphics, logos) is the property of [name] and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of [name], with copyright authorship for this compilation by [name]."
    },
    {
        title: "Communications",
        description: "The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing."
    },
    {
        title: "Applicable Law",
        description: (
            <p>
                By visiting this website, you agree that the laws of the [your location], without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between [name] and you, or its business partners and associates.
                <br /> <br />Disputes <br /><br />
                Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court [your location] and you consent to exclusive jurisdiction and venue of such courts.
            </p>
        )
    },
    {
        title: "Comments, Reviews, and Emails",
        description: (<p>Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaign, and commercial solicitation.
            <br /> <br />We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant [name] non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.
        </p>)
    },
    {
        title: "License and Site Access",
        description: "We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us."
    },
]

const TOS = () => {
    return (
        <div id="p_tos_area">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-sm-3 tos_nav">
                        <div className="card" style={{ width: "11rem" }}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item active-tos">Terms of Service</li>
                                <li className="list-group-item">Privacy Policy</li>
                                <li className="list-group-item">Security Policy</li>
                                <li className="list-group-item">Security Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-9 tos_main">
                        <h4 className="head_line">Terms of Service</h4>
                        <div>
                            {tosFakeData.map((data, index) => (
                                <di key={index}>
                                    <h4 className="title">{data.title}</h4>
                                    <p>{data.description}</p>
                                </di>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TOS;