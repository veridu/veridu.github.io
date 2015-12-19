---
title: Article
layout: blank
class: article
cover: /img/coworking.jpeg
---

<div class="article__body">
	
	<div class="article__cover">
		<div class="article__cover__img_container">
			<img src="{{page.cover}}">
			<div class="article__cover__img_overlay" >
			</div>
		</div>
		<div class="article__title__container">
			<h1 class="article__title">Sharing Economy</h1>	
		</div>
	</div>

	<article>
		
			<h4 class="article__excerpt">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</h4>

			<p class="article__content">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<div class="article__tags__container">
				
				<h5>TAGS</h5>

				<div class="tag tag--purple">World Pay</div>
				<div class="tag tag--purple">PayFriendz</div>
				<div class="tag tag--purple">ZipMoney</div>
				<div class="clearfix"></div>			
				<div class="tag tag--green">Social Media & Online Services</div>
				<div class="tag tag--green">Knowledge-based Authentication</div>
				<div class="clearfix"></div>			
				<div class="tag tag--bluegreen">Contact Info</div>
				<div class="tag tag--bluegreen">Age</div>
				<div class="tag tag--bluegreen">Insight</div>
				<div class="clearfix"></div>			
				<div class="tag tag--grey">API</div>
			</div>

	</article>

</div>

<script type="text/javascript">
		
	function load () {

		angular
			.module('app')
			.controller('SolutionsCtrl', SolutionsCtrl);

		SolutionsCtrl.$inject = [];
		function SolutionsCtrl () {
			var vm = this;

			vm.sectorsTabs = { active : 'payments' };
			vm.partnersTabs = { active : 'payfriendz' };
		}

	}

	document.addEventListener('DOMContentLoaded', load);

</script>
