---
title: Pricing
description: Create your tailored identity solution to see  the cost.  You'll be pleasantly surprised.
layout: page
class: pricing
---
<div  ng-controller="CartCtrl as cart">

	<div class="cart-status">
		<div>
			<select ng-model="cart.checks" class="check-qty-select">
				<option value="1000">1000</option>
				<option value="2000">2000</option>
				<option value="3000">3000</option>
			</select>

			checks/month

			<select ng-model="cart.currency" class="check-currency-select">
				<option value="£">£</option>
				<option value="€">€</option>
				<option value="$">$</option>
			</select>
			<span  ng-bind="(cart.total * cart.checks).toFixed(2)"></span>

			<div class="submit-container">
				<i class="material-icons">&#xE5CC;</i>
			</div>

		</div>
	</div>

	<section class="solutions__container">	
		<ul class="products">
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Social Media
					</div>
				</div>
				<div class="product__footer green">
					FREE 
					<i class="material-icons"
						ng-click="cart.addProduct({ name: 'Social Media', value : 0, key : 'social-media'})"  
						ng-hide="cart.hasItem('social-media')">&#xE876;</i>

					<i  class="material-icons"
						ng-click="cart.removeProduct('social-media')" 
						ng-show="cart.hasItem('social-media')">&#xE14C;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Online Services
					</div>
				</div>
				<div class="product__footer green">
					FREE
					<i class="material-icons"
						ng-click="cart.addProduct({ name: 'Online Services', value : 0, key : 'online-services'})"  
						ng-hide="cart.hasItem('online-services')">&#xE876;</i>

					<i  class="material-icons"
						ng-click="cart.removeProduct('online-services')" 
						ng-show="cart.hasItem('online-services')">&#xE14C;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE7FB;</i>
					</div>
					<div class="product__name">
						Knowledge-based Authentication 
					</div>
				</div>
				<div class="product__footer green knowledge-based-authentication">
					<strong ng-bind="cart.currency"></strong><strong class="value">0,035</strong> / CHECK 

					<i class="material-icons"
						ng-click="cart.addProduct({ name: 'Knowledge-based Authentication', value : 0.035, key : 'knowledge-based-authentication'})"  
						ng-hide="cart.hasItem('knowledge-based-authentication')">&#xE876;</i>

					<i  class="material-icons"
						ng-click="cart.removeProduct('knowledge-based-authentication')" 
						ng-show="cart.hasItem('knowledge-based-authentication')">&#xE14C;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE2C6;</i>
					</div>
					<div class="product__name">
						Document Upload 
					</div>
				</div>
				<div class="product__footer green">
					FREE
					<i class="material-icons"
						ng-click="cart.addProduct({ name: 'Document Upload', value : 0, key : 'document-upload'})"  
						ng-hide="cart.hasItem('document-upload')">&#xE876;</i>

					<i  class="material-icons"
						ng-click="cart.removeProduct('document-upload')" 
						ng-show="cart.hasItem('document-upload')">&#xE14C;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE158;</i>
					</div>
					<div class="product__name">
						Email
					</div>
				</div>
				<div class="product__footer green">
					FREE

					<i class="material-icons"
						ng-click="cart.addProduct({ name: 'Email', value : 0, key : 'email'})"  
						ng-hide="cart.hasItem('email')">&#xE876;</i>

					<i  class="material-icons"
						ng-click="cart.removeProduct('email')" 
						ng-show="cart.hasItem('email')">&#xE14C;</i>

				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE536;</i>
					</div>
					<div class="product__name">
						Age  
					</div>
				</div>
				<div class="product__footer green knowledge-based-authentication">
					<strong ng-bind="cart.currency"></strong><strong class="value">0,035</strong> / CHECK 

					<i class="material-icons"
						ng-click="cart.addProduct({ name: 'Age', value : 0.035, key : 'age'})"  
						ng-hide="cart.hasItem('age')">&#xE876;</i>

					<i  class="material-icons"
						ng-click="cart.removeProduct('age')" 
						ng-show="cart.hasItem('age')">&#xE14C;</i>
				</div>
			</li>
		</ul>
	</section>

	<div class="checkout-container">
		<form id="form-checks" name="checks" class="form-cart" onsubmit="submitChecks()">
			<div>
				<select ng-model="cart.checks" class="check-qty-select">
					<option value="1000">1000</option>
					<option value="2000">2000</option>
					<option value="3000">3000</option>
				</select>
				checks/month
			</div>
			<div>
				<select ng-model="cart.currency" class="check-currency-select">
					<option value="£">£</option>
					<option value="€">€</option>
					<option value="$">$</option>
				</select>

				<span ng-bind="(cart.total * cart.checks).toFixed(2)"></span>
				<button class="btn btn-primary btn-sm">Get started</button>
			</div>
		</form>	
	</div>

	<section  class="onboarding">
		<h2 id="ONBOARDING" class="section__title">Onboarding & Authentication</h2>
		<p class="section__description">
			How do you want to onboard and authenticate users? Combine as many methods as you like according to your specific requirements.	
		</p>

		<ul class="products">
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Social Media
					</div>
				</div>
				<div class="product__footer green">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Online Services
					</div>
				</div>
				<div class="product__footer green">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE7FB;</i>
					</div>
					<div class="product__name">
						Knowledge-based Authentication 
					</div>
				</div>
				<div class="product__footer green knowledge-based-authentication">
					<strong ng-bind="cart.currency"></strong><strong class="value">0,035</strong> / CHECK <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE2C6;</i>
					</div>
					<div class="product__name">
						Document Upload 
					</div>
				</div>
				<div class="product__footer green">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE158;</i>
					</div>
					<div class="product__name">
						Email
					</div>
				</div>
				<div class="product__footer green">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE536;</i>
					</div>
					<div class="product__name">
						Age  
					</div>
				</div>
				<div class="product__footer green knowledge-based-authentication">
					<strong ng-bind="cart.currency"></strong><strong class="value">0,035</strong> / CHECK <i class="material-icons">&#xE876;</i>
				</div>
			</li>
		</ul>


		<h2 id="CREDIBILITY" class="section__title">Credibility</h2>
		<p class="section__description">
			What do you want to verify or know about your users? We use scorecards to analyse the credibility of specific user attributes depending on what you need.
		</p>

		<ul class="products">
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Social Media
					</div>
				</div>
				<div class="product__footer bluegreen">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Online Services
					</div>
				</div>
				<div class="product__footer bluegreen">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
		</ul>
		
		<h2 id="INSIGHT" class="section__title">Insight</h2>
		<p class="section__description">
			What do you want to verify or know about your users? We use scorecards to analyse the credibility of specific user attributes depending on what you need.	
		</p>
		<ul class="products">
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Social Media
					</div>
				</div>
				<div class="product__footer bluegreen">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Online Services
					</div>
				</div>
				<div class="product__footer bluegreen">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
		</ul>

		<h2 id="RED_FLAGS" class="section__title">Red Flags</h2>
		<p class="section__description">
			What do you want to verify or know about your users? We use scorecards to analyse the credibility of specific user attributes depending on what you need.
		</p>
		<ul class="products">
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Social Media
					</div>
				</div>
				<div class="product__footer red">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Online Services
					</div>
				</div>
				<div class="product__footer red">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
		</ul>

		<h2 id="DISCOUNTS" class="section__title">Discounts</h2>
		<p class="section__description">
			How many checks do you need to run? We offer volume based discounts so that you can run the checks you need to while keeping your costs to a minimum.
		</p>
		<ul class="products">
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Social Media
					</div>
				</div>
				<div class="product__footer grey">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
			<li>
				<div class="product__description">
					<div class="product__icon">
						<i class="material-icons">&#xE853;</i>
					</div>
					<div class="product__name">
						Online Services
					</div>
				</div>
				<div class="product__footer grey">
					FREE <i class="material-icons">&#xE876;</i>
				</div>
			</li>
		</ul>


	</section>
	<section class="contact">
		<h4>SOMETHING YOU’RE NOT SEEING?</h4>
		<p class="section__description">
			Contact us to discuss your specific needs
		</p>

		<form  method="post" class="form-horizontal" role="form" ng-submit="cart.sendContact()">		

				<div class="input-container">
					<input ng-model="cart.contact.name" name="name" type="text" placeholder="Name">	
				</div>

				<div class="input-container">
					<input ng-model="cart.contact.company" name="company" type="text" placeholder="Company">	
				</div>

				<div class="input-container">
					<input ng-model="cart.contact.email"  name="email" type="email" placeholder="Email">	
				</div>				

				<div class="input-container">
					<textarea rows="5" ng-model="cart.contact.message" name="message" type="text" placeholder="Message"></textarea>
				</div>				
		
				<div class="input-container text-right">
					<button type="submit" class="btn btn-primary">Submit</button>
				</div>
		</form>
	</section>

</div>

<script type="text/javascript">


	function submitChecks () {
		var form = $('#form-checks');
		console.log(form);
	}		
	
	function load (){

		bindEvents();


	}

	document.addEventListener('DOMContentLoaded', load);

	function bindEvents () {
		
		var fixed_header = document.querySelector('.cart-status');
		var header  =	$('#form-checks')

		window.onscroll = function function_name () {

			var elementPosition  = header.offset();
			var scrolled 	 = document.documentElement.scrollTop || document.body.scrollTop ;

			//will show
			if ( scrolled > elementPosition.top ){

				if (fixed_header.style.display != 'block'){

					fixed_header.style.display =  'block';

				} 

			} else{ //will hide

				if (fixed_header.style.display != 'none'){

					fixed_header.style.display =  'none';

				} 
			} 
		}
	}
</script>