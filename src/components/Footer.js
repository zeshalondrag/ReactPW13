import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import QRCode from "qrcode.react";

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer_footer">
                <div className="Footer_content">
                    <div className="Footer_links">
                        <div className="Footer_linkBlock">
                            <div className="Footer_linkTitle">About</div>
                            <div className="Footer_linkList">
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/about-us">About POIZON</a>
                                </div>
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/protocol/terms-of-service">Terms & Conditions</a>
                                </div>
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/protocol/privacy-policy">Privacy Policy</a>
                                </div>
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/protocol/shipping-policy">Shipping Policy</a>
                                </div>
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/protocol/return-policy">Return Policy</a>
                                </div>
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/blog/list">POIZON Blog</a>
                                </div>
                            </div>
                            <div className="Footer_linkTitle" style={{ marginTop: '54px'}}>Customer Support</div>
                            <div className="Footer_linkList">
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/qa">Help Center</a>
                                </div>
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/protocol/contact-us">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="Footer_linkBlock">
                            <div className="Footer_linkTitle">Authentication</div>
                            <div className="Footer_linkList">
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/authentication/home">Online Authentication</a>
                                </div>
                                <div className="Footer_linkItem">
                                    <a href="https://www.poizon.com/protocol/notice">Authentication Addendum</a>
                                </div>
                            </div>
                            <div className="Footer_titleMargin Footer_linkTitle">Follow us</div>
                            <div className="Footer_followList">
                                <a href="https://www.facebook.com/poizonapp" className="Footer_followItem">
                                    <div className="PoizonImage_imageWrap">
                                        <img style={{ width: '24px', height: '24px'}} className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/c710ba9d-1fc6-3af2-d724-1af15cd0531e-72-72.png?x-oss-process=image/format,webp/resize,w_48" alt="facebook"/>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/poizonapp" className="Footer_followItem">
                                    <div className="PoizonImage_imageWrap">
                                        <img style={{ width: '24px', height: '24px'}} class="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/2daedcd1-15de-cb26-2481-879ad60a4b76-72-72.png?x-oss-process=image/format,webp/resize,w_48" alt="instagram"/>
                                    </div>
                                </a>
                                <a href="https://www.tiktok.com/@poizon_app" className="Footer_followItem">
                                    <div class="PoizonImage_imageWrap">
                                        <img style={{ width: '24px', height: '24px'}} class="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/51b7de14-1183-b80d-bb52-735f2fd9c68d-72-73.png?x-oss-process=image/format,webp/resize,w_48" alt="tiktok"/>
                                    </div>
                                </a>
                                <a href="https://www.pinterest.com/poizonofficial" className="Footer_followItem">
                                    <div class="PoizonImage_imageWrap">
                                        <img style={{ width: '24px', height: '24px'}} className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/f5dede12-5b44-f3e2-199e-f0b0bcbada22-72-72.png?x-oss-process=image/format,webp/resize,w_48" alt="pinterest"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="Footer_linkBlockJoin">
                            <div>
                                <div className="DownloadApp_linkTitle">Download POIZON APP</div>
                                <div className="DownloadApp_couponText">
                                    App Exclusive
                                    <span className="DownloadApp_info"> $10 Code: 10APP</span>
                                </div>
                                <div className="DownloadApp_content">
                                    <div className="DownloadApp_qrWrapper">
                                        <QRCode value="https://www.poizon.com" size={120} />
                                    </div>
                                    <div className="DownloadApp_storeList">
                                        <div>
                                            <a href="https://apps.apple.com/us/app/poizon-sneakers-apparel/id1509915974">
                                                <div class="PoizonImage_imageWrap">
                                                    <img style={{ width: '246px', height: '61px'}} class="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/09e6c45a-96c1-14ec-40b3-244a2754c584-738-183.png?x-oss-process=image/format,webp/resize,w_492" alt="qrcode"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://play.google.com/store/apps/details?id=com.shizhuang.poizon.hk&shortlink=0jptnsv6&c=GooglePlay&pid=PC_bottom_g&af_xp=qr&source_caller=ui&hl=en">
                                                <div class="PoizonImage_imageWrap">
                                                    <img style={{ width: '246px', height: '61px'}} class="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/655f4993-900d-d2ee-7f54-88dbc5254b46-738-183.png?x-oss-process=image/format,webp/resize,w_492" alt="qrcode"/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Footer_line"></div>
                    <div className="Footer_sub">
                        <div>
                            <div className="Footer_subPayMent">
                                <div className="Footer_subPayMentLeft">
                                    <div className="Footer_payTitle">Security Certification</div>
                                    <div className="Footer_payList">
                                        <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                            <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/f0af0d2c-ff67-a77a-6187-1399f7eae883-150-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="pci"/>
                                        </div>
                                        <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '30px', height: '30px'}}>
                                            <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/a61500ee-d743-011d-58fc-a3ed2f0c62cd-91-90.png?x-oss-process=image/format,webp/resize,w_90,h_90" alt="Visa"/>
                                        </div>
                                        <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                            <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/d47fa7d5-3f3a-17b4-f05a-52791ea1ef12-151-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="IdCheck"/>
                                        </div>
                                        <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '90.58px', height: '30px'}}>
                                            <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/3c257d79-e128-aa65-9229-2fe79861387c-273-90.png?x-oss-process=image/format,webp/resize,w_273,h_90" alt="PayPal"/>
                                        </div>
                                        <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                            <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/e170fa28-935f-5ba7-a62c-2c5ce1551d87-151-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="SafeKey"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="Footer_payTitle">We Accept</div>
                                    <div className="Footer_payList">
                                    <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                        <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/f8ac7cf4-b066-4f1d-928c-1f18ec572be6-150-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="VISA"/>
                                    </div>
                                    <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                        <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/baad9426-9fc5-e8ba-3d2a-0c12830f1f1a-151-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="mastercard"/>
                                    </div>
                                    <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                        <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/80707c74-367b-b9b4-3fee-09f40533a91c-151-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="AMERICAN EXPRESS"/>
                                    </div>
                                    <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                        <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/37283492-8635-26e7-d845-6bc750171e5a-151-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="Paypal"/>
                                    </div>
                                    <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                        <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/d28c6515-1298-8a6b-03a7-fbfc472b5573-151-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="maestro"/>
                                    </div>
                                    <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                        <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/da0508f2-25b9-4727-4c49-df80e1275798-151-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="Klarna"/>
                                    </div>
                                    <div className="PoizonImage_imgWrap Footer_payIcon" style={{ width: '50px', height: '30px'}}>
                                        <img className="PoizonImage_img" src="https://cdn-img.poizon.com/node-common/5e286559-5084-684f-bb70-9e37a644ab76-151-90.png?x-oss-process=image/format,webp/resize,w_150,h_90" alt="ApplePay"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Footer_subText1">
                                @2024 
                                <a href="/"> POIZON </a>
                                All Rights Reserved.
                            </div>
                            <div className="Footer_subText">
                                <a href="https://www.poizon.com/user/privacy">Do Not Sell or Share My Personal Information</a>
                            </div>
                        </div>
                        <div className="Footer_subRight">
                            <div className="Footer_ltd">POIZON Holding PTE. LTD.</div>
                            <div className="Footer_subText">6 RAFFLES QUAY #14-06 SINGAPORE</div>
                            <div className="Footer_subText">support@poizon.com</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;