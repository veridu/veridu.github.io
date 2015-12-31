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
	</div>
</section>

<section class="contact__welcome__mobile">
	<p>
		Do you have a question for us? Just fill out this short form and one of our team will be in touch.
	</p>
</section>

<section class="veridu-list md-cards">

	<address class="item-container">
		<div>
			<h3>VERIDU LTD</h3>
			Co. No. 8885008<br>
			9th floor, 107 Cheapside<br>
			EC2V 6DN, London<br>
			United Kingdom
		</div>
	</address>

	<address class="item-container">
		<div>
			<h3>UK HEADQUARTERS</h3>
			Wework Moorgate<br>
			6th floor, 3042<br>
			1 Fore Street<br>
			London EC2Y 5EJ <br>
			United Kingdom
		</div>
	</address>

	<address class="item-container">
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

<section class="contact veridu-list" ng-controller="ContactCtrl as ctrl">
    <div>
        <h2 class="font-light">Contact <span class="hidden-xs">us</span> <a class="elegant-link" href="https://podio.com/webforms/6314922/492384" target="_blank" >here</a></h2>
		<!--
        <p class="section__description visible-xs">
            Contact us to discuss your specific needs
        </p>

        <form  method="post" class="form-horizontal" role="form" ng-submit="ctrl.sendContact()">
            <div class="input-container name">
                <input ng-model="ctrl.contact.name" name="name" type="text" placeholder="Name">
            </div>

            <div class="input-container company">
                <input ng-model="ctrl.contact.company" name="company" type="text" placeholder="Company">
            </div>
            <div class="clearfix hidden-xs"></div>

            <div class="input-container email">
                <input ng-model="ctrl.contact.email"  name="email" type="email" placeholder="Email">
            </div>
            <div class="clearfix hidden-xs"></div>

            <div class="input-container message">
                <textarea rows="5" ng-model="ctrl.contact.message" name="message" type="text" placeholder="Message"></textarea>
            </div>

            <div class="input-container text-right submit">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form> -->
    </div>
</section>

<section class="support pure-container">

	<div>
		Need product support? <br>
		<a href="https://veridu.com/submit/" target="_blank">https://veridu.com/submit/</a>
	</div>

	<br>

	<address>
		Media enquiry? <br>
		Contact: <a href="mailto:marketing@veridu.com">marketing@veridu.com</a>
	</address>

	<address>
		Visiting Veridu HQ? <br>
		1 Fore Street <br>
		London, EC2Y 5EJ <br>
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

		angular
			.module('app')
			.controller('SolutionsCtrl', SolutionsCtrl);

		var $window = $(window);
		var $cover = $('.contact__cover');

		SolutionsCtrl.$inject = [];
		function SolutionsCtrl () {
			var vm = this;

			vm.sectorsTabs = { active : 'payments' };
			vm.partnersTabs = { active : 'payfriendz' };
		}

		$cover.css('height', ($window.height() * 0.7));

		$window.resize(function() {
			$cover.css('height', ($window.height() * 0.7));
		});

	}

	document.addEventListener('DOMContentLoaded', load);

</script>


<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false" ></script>
<script >

	var myLatLng = { lat: 51.5180027, lng: -0.090573};
	var myOptions = {
		center: new google.maps.LatLng(myLatLng),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true
	};
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Veridu HQ'
	});
</script>