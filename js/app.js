window.onload = function() {
  console.log("page loaded");
  makeCartScrollNicely();
  toggleSiderBar();
}

function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart);
}

function toggleSiderBar() {
	var $toggle = document.querySelector(".site__right-sidebar-toggle");
	$toggle.addEventListener("click", function() {
		document.body.classList.toggle("js-show-right-sider");
		console.log("click");
	})
}