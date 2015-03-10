// alumnos.factory.js
(function(){
    "use strict";
	    angular
    	.module('Alumnos')
		.service('alumnos', alumnos)
		

		function alumnos()
		{
			
			this.formVisibility = false;
			this.showForm = function()
			{
				this.formVisibility = true;
			}
			
			this.hideForm = function()
			{
				this.formVisibility = false;
			}
			
		}
})();