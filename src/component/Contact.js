import React from 'react';
import './contact.css';
import p1 from './images/undraw_profile_pic_ic5t.png';
class Contact extends React.Component{
    render(){
        return(
            <div>




<head>
	<title>gallery</title>
</head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="contact.css"/>
<div class="main-header">
<header>
	<ul>
		<li><a href="/Index">home</a></li>
		<li><a href="/Services">services</a></li>
		<li><a href="/Login">login</a></li>
	</ul>
</header>
</div>
<body>
<div class="container">
	<img src={p1} alt="avatar"/>
	<p>hello can i get a help for my PC</p>
	<span class="time-right">10:00</span>
</div>
<div class="container darker">
	<img src={p1} alt="avatar" class="right"/>
	<p>hey! yes we can help you for your queries, send in your queries.</p>
	<span class="time-left">10:01</span>
</div>
<div class="container">
	<img src={p1} alt="avatar"/>
	<p>my laptop is getting a heating issue</p>
	<span class="time-right">11:03</span>
</div>
<div class="container darker">
	<img src={p1} alt="avatar" class="right"/>
	<p>not a problem sir. you may have a look at the drivers and bios issues. you can also look for the youtube videos else you can contact bigbyte putalisadak for the servicing</p>
	<span class="time-left">11:04</span>
</div>
<div class="chatbox">
	<input type="text" placeholder="write a message"/>
</div>
</body>




            </div>
        )
    }
}
export default Contact;