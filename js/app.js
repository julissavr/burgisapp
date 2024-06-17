// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
		{
		path: '/carrito/',
    	url: 'carrito.html',
    	name: 'carrito',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/burgis1/',
    	url: 'burgis1.html',
    	name: 'burgis1',
  		},
		{
		path: '/burguis2/',
    	url: 'burguis2.html',
    	name: 'burguis2',
  		},
		{
		path: '/burgis3/',
    	url: 'burgis3.html',
    	name: 'burgis3',
  		},
		{
		path: '/burgis4/',
    	url: 'burgis4.html',
    	name: 'burgis4',
  		},
		{
		path: '/burgis5/',
    	url: 'burgis5.html',
    	name: 'burgis5',
  		}
	
		
	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});

document.addEventListener('DOMContentLoaded', function() {
    var loginModal = app.loginScreen.open('#modal-login');
});


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
  }, 5000);
});
