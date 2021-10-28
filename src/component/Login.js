import React from 'react';
import './login.css'
import p1 from './images/undraw_lost_online_wqob.png'
import p2 from './images/undraw_profile_pic_ic5t.png';

function Login(){
    return(
        <div>
<head>
		<title>loginpage</title>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" type="text/css" href="loginoption.css"/>
	</head>

		<img class="wave" src={p1}/>
		<div class="container">
			<div class="img">
			</div>
			<div class="login-container">
				<form action="login option.html">
					<img class="avatar" src={p2}/>
					<h2>welcome</h2>
					<div class="input-div one">
						<div class="i">
							<i class="fas fa-user"></i>						
						</div>
						<div>
							<h5>username</h5>
							<input class="input" type="text"/>
						</div>
					</div>
					<div class="input-div two">
						<div class="i">
							<i class="fas fa-lock"></i>
						</div>
						<div>
							<h5>password</h5>
							<input class="input" type="password"/>
						</div>
					</div>
                    <div>
					<a href="#">register now!</a>
					<a href="#">forget password?</a>
					<input type="submit" class="btn" value="login"/>
			
                </div>
                </form>
			</div>
		</div>
		
    </div>
    )
}
export default Login;