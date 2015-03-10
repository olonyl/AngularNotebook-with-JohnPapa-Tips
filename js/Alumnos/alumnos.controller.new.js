
// alumnos.controller.new.js
(function(){
    "use strict";

    angular
    	.module('Alumnos')
    	.controller('NuevoAlumno', NuevoAlumno);

    
    NuevoAlumno.$inject = ['alumnos'];
	
    function NuevoAlumno (alumnos){
		var vm = this;
		this.AgregarAlunno = function (listaAlumnos, nuevoObjeto)
		{
			listaAlumnos.push({nombre:nuevoObjeto.nombre,telefono:nuevoObjeto.telefono,curso: nuevoObjeto.curso});
			alumnos.formVisibility = false;
		}
	}

})();