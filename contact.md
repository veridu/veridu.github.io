---
title: Contact
class: contact-page
layout: blank
cover: img/bridge.jpeg
---

<section class="contact__landing">
	<div class="contact__body">
		<div class="contact__cover">
			<div class="contact__cover__overlay"></div>
			<div class="map" id="map"></div>
			<div class="contact__cover__contents">
				<div class="page-description">
					<h1>Contact</h1>
					<p>
						Do you have a question for us? Just fill out this short <br>
						form and one of our team will be in touch.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="contact__welcome__mobile">
	<p>
		Do you have a question for us? Just fill out this short form and one of our team will be in touch.
	</p>
</section>

<section class="veridu-list md-cards">

	<address class="item-container" onclick="setLocation('ltd')" id="ct-ltd" >
		<div>
			<h3>VERIDU LTD</h3>
			Co. No. 8885008<br>
			9th floor, 107 Cheapside<br>
			London, EC2V 6DN<br>
			United Kingdom
		</div>
	</address>

	<address class="item-container" onclick="setLocation('hq')" id="ct-hq">
		<div>
			<h3>UK HEADQUARTERS</h3>
			Wework Moorgate<br>
			1 Fore Street<br>
			London, EC2Y 9DT<br>
			United Kingdom
		</div>
	</address>

	<address class="item-container" onclick="setLocation('brazil')" id="ct-brazil">
		<div>
			<h3>BRAZILLIAN OFFICE</h3>
			Bridge Coworking <br>
			R. Luiz Barbosa de Campos, 420 <br>
			Planalto Paraíso <br>
			São Carlos - São Paulo <br>
			13562-330 <br>
			Brazil
		</div>
	</address>
</section>


<section class="contact veridu-list">
	<div>
		<h2 class="font-light">Contact us</h2>

		<form  class="form-horizontal" role="form" action="https://www.getdrip.com/forms/8370268/submissions" method="post" data-drip-embedded-form="8370268" ng-submit="ctrl.sendContact()" target="_blank">
			<div class="input-container">
				<input ng-model="ctrl.contact.first_name" name="fields[first_name]" type="text" placeholder="First Name" >
			</div>

			<div class="input-container">
				<input ng-model="ctrl.contact.last_name" name="fields[last_name]" type="text" placeholder="Last Name">
			</div>
			<div class="clearfix hidden-xs"></div>
			<div class="input-container">
				<input ng-model="ctrl.contact.company" name="fields[company]" type="text" placeholder="Company" >
			</div>

			<div class="input-container">
				<input ng-model="ctrl.contact.job_title" name="fields[job_title]" type="text" placeholder="Job Title">
			</div>
			<div class="hidden-xs"></div>

			<div class="input-container ">
				<input ng-model="ctrl.contact.email"  name="fields[email]" type="email" placeholder="Email">
			</div>

			<div class="input-container ">
				<input ng-model="ctrl.contact.phone" class="half"  name="fields[telephone]" type="text" placeholder="Telephone">
			</div>
			<div class="clearfix hidden-xs"></div>

			<div class="input-container message">
				<textarea rows="5" ng-model="ctrl.contact.message" name="fields[tell_us_more]" type="text" placeholder="Message"></textarea>
			</div>

			<div class="input-container text-right submit">
				<button type="submit" class="btn btn-primary btn-primary--text-white">Submit</button>
			</div>
		</form>

	</div>
</section>


<section class="support pure-container">

	<div>
		Need product support? <br>
		<a href="mailto:support@veridu.com" target="_blank">support@veridu.com</a>
	</div>

	<br>

	<address>
		Media enquiry? <br>
        <a href="mailto:marketing@veridu.com">marketing@veridu.com</a>
	</address>

	<address>
		Visiting Veridu HQ? <br>
		1 Fore Street <br>
		London, EC2Y 9DT <br>
		Our nearest tube station is Moorgate. <br>

		<a href="https://www.google.com/maps?ll=51.52058,-0.099765&z=17&t=m&hl=en-US&gl=BR&mapclient=embed&q=1+Fore+St+London+EC2Y+5EJ+UK" target="_blank">Google map</a>
	</address>

	<div>
		For regular Veridu news sign up to our monthly newsletter
	</div>
	<br>
</section>

<script type="text/javascript">

	function load () {

		var $window = $(window);
		var $cover = $('.contact__cover');
		$cover.css('height', ($window.height() * 0.7));
		$window.resize(function() {
			$cover.css('height', ($window.height() * 0.7));
		});

	}

	document.addEventListener('DOMContentLoaded', load);

</script>


<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false" ></script>
<script >


	var mapOptions  = {
		'hq' : {
			latLng: { lat: 51.5180027, lng: -0.090573 },
			options: {
				center: new google.maps.LatLng({ lat: 51.5180027, lng: -0.090573 }),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true
			}
		},
		'ltd' : {
			latLng: { lat: 51.5142235, lng: -0.095689 },
			options : {
				center: new google.maps.LatLng({ lat: 51.5142235, lng: -0.095689 }),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true
			}
		},
		'brazil' : {
			latLng: { lat: -22.0082951, lng: -47.9088077 },
			options: {
				center: new google.maps.LatLng({ lat: 22.0082951, lng: -47.9088077 }),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true
			}
		}
	};
	function setLocation(office) {
		Map.setCenter(mapOptions[office].latLng);
		$('.item-container').removeClass('animated bounce');
		$('#ct-' + office).addClass('animated bounce');
	}


	var Map = new google.maps.Map(document.getElementById("map"), mapOptions['hq'].options);
	new google.maps.Marker({
		position: mapOptions['hq'].latLng,
		map: Map,
		title: 'Veridu HQ'
	});
	new google.maps.Marker({
		position: mapOptions['ltd'].latLng,
		map: Map,
		title: 'Veridu HQ'
	});
	new google.maps.Marker({
		position: mapOptions['brazil'].latLng,
		map: Map,
		title: 'Veridu HQ'
	});

</script>
