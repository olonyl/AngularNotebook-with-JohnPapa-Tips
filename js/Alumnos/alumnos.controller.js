
// alumnos.controller.js
(function(){
    "use strict";

    angular
    	.module('Alumnos')
    	.controller('ListaAlumnos', ListaAlumnos);

    
    ListaAlumnos.$inject = ['alumnos'];
	
    function ListaAlumnos (alumnos){
		var vm = this;
		
		vm.alumnos = [
			{nombre:"Jose Emir", telefono: "2255-8978", curso:"Segundo ESO"},
			{nombre:"David Gorrion", telefono: "2478-1245", curso:"Primero ESO"},
			{nombre:"Yandil Zepeda", telefono: "8888-7844", curso:"Segundo ESO"},
			{nombre:"Tenorio Bubis", telefono: "2505-2565", curso:"Primero ESO"}
		];
		
	   	vm.formVisibility = function ()
		{
		  return alumnos.formVisibility;
		}
		
		vm.showForm = function ()
		{
			return alumnos.showForm();
		}
		
		vm.hideForm = function ()
		{
			return alumnos.hideForm();
		}
	}

})();