---
title: Veridu for Cryptocurrency Wallets
layout: blank
class: article
cover: img/articles/crypto-wallets/cover.png
excerpt: A happy user is an active user
---

<article>
	<div class="article__body article__body--crypto-wallets">

		<div class="article__cover" style="background-image: url({{page.cover}})" >
			<div class="article__cover__img_container" >
				<div class="article__cover__img_overlay"  >
				</div>
			</div>
			<div class="article__call__container">
				<h1 class="article__title">Veridu for Cryptocurrency Wallets</h1>
				<h4 class="article__excerpt hidden-xs">
					<div>
						Whether you’re regulated as a money transmitter or just want to protect your reputation by being proactive about knowing your customers, identity verification is a huge challenge for cryptocurrency wallet providers.
					</div>
				</h4>
			</div>
		</div>

		<h4 class="article__excerpt visible-xs">
			Whether you’re regulated as a money transmitter or just want to protect your reputation by being proactive about knowing your customers, identity verification is a huge challenge for cryptocurrency wallet providers.
		</h4>

		<div class="article__content-wrapper">
			<div class="article__content">

				<h4>A happy user is an active user</h4>

				<p>
					Whether you’re regulated as a money transmitter or just want to protect your reputation by being proactive about knowing your customers, identity verification is a huge challenge for cryptocurrency wallet providers.
				</p>
				<p>
					Forums are full of tirades from users unable to sign up to their wallet of choice because they didn’t have the right identity documents, from those frustrated with the hoops they had to jump through to prove their identity and from users locked ou of their accounts for days at a time.
				</p>

				<h5>What if your wallet eliminated these frustrations? What if you could...</h5>

				<p>
					<ul class="no-bullets">
						<li>
							&bullet; &nbsp; &nbsp;Safely grow your userbase in regions with a large unbanked or underbanked population?
						</li>
						<li>
							&bullet; &nbsp; &nbsp; Attract more users by improving the security of your wallet without affecting their experience?
						</li>
						<li>
							&bullet; &nbsp; &nbsp; Retain users by offering a slick account reactivation experience?
						</li>
					</ul>
				</p>

				<h5>What if you used Veridu?</h5>
				<p>Veridu brings trust to the internet with consent-driven social identity solutions. Our solutions allow you to enhance customer due diligence globally without friction, and at a low price point.</p>
				<p>You can quickly and easily integrate us into your onboarding process using our widgets or our API and our solutions are truly mobile friendly.</p>

				<h5>
					Why Veridu? <br>
					Get more users globally
				</h5>

				<p>Don’t ignore the enormous potential in the unbanked and underbanked markets just because you can’t easily verify identity using traditional means - use social identity to mitigate the risk and reap the rewards.</p>
				<p>Veridu covers all the major global social networks (there are over 2bn active social media users globally) and uses proprietary and sophisticated algorithms to calculate a user’s credibility based on this data.</p>

				<img src="img/articles/crypto-wallets/world-coverage.png" class="world-coverage">
				<quote style="width:200%; display:block;">
					<em>Total active users on the top social network in each country, based on We Are Social’s Digital, Social and Mobile in 2015 Report.</em>
				</quote>

			</div>

			<div class="article__tags__container">

				<h5>TAGS</h5>

				<div class="tag tag--partner">World Pay</div>
				<div class="tag tag--partner">PayFriendz</div>
				<div class="tag tag--partner">ZipMoney</div>
				<div class="clearfix"></div>
				<div class="tag tag--sources">Social Media & Online Services</div>
				<div class="tag tag--sources">Knowledge-based Authentication</div>
				<div class="clearfix"></div>
				<div class="tag tag--scores">Contact Info</div>
				<div class="tag tag--scores">Age</div>
				<div class="tag tag--scores">Insight</div>
				<div class="clearfix"></div>
				<div class="tag tag--integration">API</div>
			</div>
		</div>
	</div>
</article>


<script type="text/javascript">

	function load () {

		angular
			.module('app')
			.controller('SolutionsCtrl', SolutionsCtrl);

		var $window = $(window);
		var $cover = $('.article__cover');

		SolutionsCtrl.$inject = [];
		function SolutionsCtrl () {
			var vm = this;

			vm.sectorsTabs = { active : 'payments' };
			vm.partnersTabs = { active : 'payfriendz' };
		}

		$cover.css('height', ($window.height() * 2/3));

		$window.resize(function() {
			$cover.css('height', ($window.height() * 2/3));
		});

	}

	document.addEventListener('DOMContentLoaded', load);

</script>
