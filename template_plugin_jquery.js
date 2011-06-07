(function ($) {
	var privateFunc = function(  ) {
	}
	var methods = {
		init : function( options ) { 
			var settings = {
			  
			};
			
			return this.each(function(){
				
				var $this = $(this);
				if ( options ) { 
					$.extend( settings, options );
				}
				
			})
		},
		reset : function( ) { 
			
			return this.each(function(){
			
				var $this = $(this);

			})
		},
		destroy : function( ) { 
			return this.each(function(){

				var $this = $(this);
			})
		} 
	};       
	$.fn.myPlugin = function( method ) {      
			if ( methods[method] ) {
			  return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} else if ( typeof method === 'object' || ! method ) {
			  return methods.init.apply( this, arguments );
			} else {
			  $.error( 'Method ' +  method + ' does not exist on jQuery.myPlugin' );
			}
	};
})(jQuery);