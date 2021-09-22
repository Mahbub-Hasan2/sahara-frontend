import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const BlogDetail = () => {
    return (
        <div id="P_blog_detail_area">
            <div className="container">
                <div className="head_section">
                    <button className="">Blog</button>
                    <button className="">15 min read</button>
                    <h4>Bantu Modal Bergulir Warung <br /> Binaan melalui Sahara Dermawan</h4>
                    <div className="user_info">
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                    </div>
                </div>
                <div className="body_section">
                    <img src="https://i.imgur.com/bPsxZiX.png" alt="" className="img-fluid" />
                    <p>
                        Wabah Pandemi COVID-19 tengah melanda dunia. Di Indonesia berdampak sangat serius, terutama perekonomian masyarakat. Itu juga dirasakan warung-warung binaan Sahara (Sahabat Usaha Rakyat) bersama Inkowapi (Induk Koperasi Wanita Pengusaha Indonesia).
                        <br /><br />
                        Sejak kebijakan social distancing berlaku di DKI Jakarta, warung-warung itu mengalami kesulitan berusaha meski ada beberapa di antaranya telah berdiri puluhan tahun. Kesulitan dihadapi warung-warung itu di antaranya permintaan turun akibat daya beli masyarakat rendah. Itu diperburuk dengan bantuan sosial diperoleh secara cuma-cuma.

                        <br /><br />
                        Selanjutnya, kesulitan berjualan secara daring (online). Dan, berkurangnya modal usaha akibat beberapa jenis barang dagangan tidak laku. Kemudian kenaikan harga dan kesulitan dalam mencari bahan baku. Menyusul sejumlah kesulitan tersebut, pendapatan warung binaan Sahara anjlok 60 persen.
                        <br />
                        Kondisi memprihatinkan sejumlah warung binaan itu, tentu menjadi perhatian Sahata dan Inkowapi. Dengan tagline Bersama dalam Kebaikan untuk Usaha Rakyat, Sahara dan Inkowapi mengajak seluruh lapisan masyarakat mendukung warung tetangga agar bisa bertahan di masa Pandemi COVID-19.
                        <br /><br />

                        Sahara bekerja sama dengan Inkowapi dan didukung Pemda Jakarta Pusat meluncurkan program Sahara Dermawan yaitu program pemberian modal kerja kepada warung-warung binaan sehingga usaha tetap bisa berjalan. Sahara Dermawan merupakan platform di mana warung dapat memenuhi kebutuhan usaha dengan bantuan modal usaha dari Sahara.
                        <br /><br />
                        Founder Sahara Ir. Sharmila menyebut sebelum program ini dirancang, tim Sahara telah mengadakan kunjungan ke beberapa warung binaan selama April – Agustus 2020. Hasil kunjungan berdasar curhat para pemilik warung binaan, paling mendesak modal kerja. Untuk itu, kami memberikan bantuan permodalan dalam bentuk modal bergulir, tanpa bunga dan tanpa agunan, tutur Sharmila, di Jakarta, Jumat (28/8/2020).
                        <br /><br />
                        Sedangkan Chief Executive Officer (CEO) Sahara Farah Savira menambahkan, khusus untuk Jakarta Pusat, dijadikan sebagai pilot project dari program ini. Dana bergulir diberikan maksimal Rp2 juta untuk 1.000 warung binaan di Jakarta Pusat. Ke depan, program seperti itu, akan dilaksanakan ke seluruh warung binaan Sahara seluruh Indonesia.
                        <br /><br />
                        Kami berharap modal kerja itu, membuat usaha warung-warung tetap berjalan. Semoga pendapatan tetap terjaga dan meningkat, sehingga bisa mendukung perekonomian rumah tangga, harap Farah.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;