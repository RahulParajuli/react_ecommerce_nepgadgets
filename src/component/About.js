import React from 'react';
import './about.css';
import p1 from './images/number 2.png';
import p2 from './images/number 3.png';
import p3 from './images/number-one_1.png';

class About extends React.Component{
    render(){
        return(
<div>




<link rel="stylesheet" type="text/css" href="about.css"/>

	<header>
	<div class="nav-bar">
		<ul>
			<li><a href="#">gallery</a></li>
			<li><a href="#">vacancy</a></li>
			<li><a href="#">support</a></li>
		</ul>
	</div>
	</header>
	<div class="about">
		<h1>
			<strong>about US</strong>
		</h1>
        <h1>
			<p>we live by the same principle as any successful startup:<b>hustle, adapt, listen, repeat.</b></p>
		</h1>
	<div class="container">
		<h1>our story</h1>
		<p>nepgadgets, a distributor of information and communication sector prividing priducts and services in Nepal was established in october 2019. it offers a complete range of products and services.we are the business made up of innovators and foreward thinkers, with the drive to wherewithal to constantly update and improve the online shoping experience/<br/>nepgadgets is a revolutionary way to shop for your desired technological equipments. our website and multibrand showrooms are a one stop solution for the technological needs and will change the way you shop for the computers and tech products.<br/>nepgadgets is powered by <b>Bigbyte IT world pvt ltd.</b>, one of the nations top distributor for the IT, networks and security system, virtualizations and storage products. it sells over 30 different brands, including Dell,lenevo,HP,acer,gigabyte,logitech,prolink,belkin and samsung. we have the top market share for all products. we distribute and a huge base of satisfied and loyal customers gained through adding real value both pre sale and afterwards.</p>
		<h1>nepgadgets is</h1>
		<div class="image-wraper">
			<img src={p3}/>
			<p>the nations top distributor for ICT products</p>
		</div>
		<div class="image-2">
			<img src={p2}/>
			<p> 30 different international brands, including DELL,HP,LENEVO,ACER,LOGITECH,BELKIN,SAMSUNG</p>
		</div>
		<div class="image-3">
			<img src={p2}/>
			<p>private,goverment,ngo,ingo, all are our customers</p>
				</div>
		<h1>MEET OUR TEAM</h1>
		<h2>Rahul Parajuli:- MD and CEO</h2>
		<h2>dinesh pariyar:-properitor</h2>
		<h2>Rupesh Thakur:-sales Department</h2>
        </div>
</div>
</div>
        );
    }
}
export default About;