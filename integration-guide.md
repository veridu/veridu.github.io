---
title: Integration Guide
description: Integration Guide
layout: blank
class: pricing
---

<div class="v-row" style="background:white;  padding-top:2em; padding-bottom: 6em;">
	<h1 class="text-center" style="padding-bottom: 2em; padding-top:1em">Integration Guide</h1>

	<div class="v-container">
		<p>
			Follow this guide to make the integration happen in minutes on any platform, if you are using <a href="ionicframework.com/">Ionic</a>, jump the steps by using our new <a href="https://github.com/veridu/veridu-angularjs" target="_blank">AngularJS SDK</a> and reading its documentation.
		</p>

		<br>

		<h2>Steps:</h2>
		<br>
		<h4>Before you code:</h4>
		<ol>
			<li>Create a <a href="https://dashboard.veridu.com">Veridu Dashboard</a> account</li>
			<li>Generate an API Key on the Dashboard</li>
		</ol>

		<br>

		<h4>Let's <kbd>code</kbd>:</h4>
		<ol>
			<li>
				<strong>Generate a session/user to start querying the API </strong><small>. <em>(Not an authenticated user. Just a Veridu user)</em></small>
				<br>
				<h4>Request:</h4><br>
<pre>
POST https://api.veridu.com/<strong>rafael</strong>/session/write

?client=<strong>YOUR_API_KEY</strong>
&mobile=true
&nonce=<strong>YOUR_RANDOM_NONCE</strong>
&timestamp=<strong>CURRENT_TIMESTAMP</strong></pre>
<h4>Expected Response (json):</h4>
<pre>{
  status:true
  nonce:"9854028",
  token:"ad63e8ba5c559766x6774ff1f561132xzf6b77c5c1dbaf02663a0af3ada12b289",
  expires:1773125918,
  username:"30e24d63950deda8fz081b99ecbee31"
}</pre>
				<h4>Recommendations:</h4>
				<ul>
					<li>
						Save the <strong>session "token"</strong> and the username inside your application, preferably on a persistent storage.
						<ul>
							<li>The session lasts 10 years</li>
						</ul>
					</li>
				</ul>
				<br>
			</li>
			<li>
				<strong>Start authenticating: </strong>
				<br>
				<br>
<pre>window.open('https://widget.veridu.com/'+ <strong>rafael</strong> + '/provider/login/'+ <strong>provider</strong> +'/'+
<strong>YOUR_API_KEY</strong> +'/'+ <strong>GENERATED_USER</strong> +'?session='+ <strong>GENERATED_SESSION</strong> +
'&amp;language=en-us', '_system');</pre>
				<br>
				<code><small>https://widget.veridu.com/rafael/provider/login/<strong>facebook</strong>/<strong>axz9383899a</strong>/<strong>johndoe</strong>?session=<strong>zxqq9d938399</strong>&language=en-us</small></code>
				<br>
				<br>
				<div >
					Or you can just create a <em>function login (provider)</em> which will receive the desired provider and then call the function.
				</div>

				<br>
				<div >
					<code><strong>_system</strong></code> parameter  on <kbd>window.open</kbd> tells your App to use the default browser of your phone, this will allow us to access it <a href="https://issues.apache.org/jira/browse/CB-4897" target="_blank">more easily</a>.
				</div>

				<br>

				Any questions I'll be glad to answer! <br>
				Find me here rafael@veridu.com
				<br>

			</li>
		</ol>
	</div>

</div>
