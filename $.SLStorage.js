(function(){
		var service = {};
		var store = {};
		var prefix = 'prefix-';
		var hiddenStorage = true;
		
	// This function is used for retriving data from localStorage at loading page
		for (var key in localStorage) {
				if(key.indexOf(prefix)!==-1){
					store[key] = JSON.parse(localStorage.getItem(key));
					if(hiddenStorage===true)
					localStorage.removeItem(key)
					;
				}
		}
		// For reload page
		window.onbeforeunload = function(event){
			for (var key in store) {
				localStorage[key] = JSON.stringify(store[key]);
			}	
		};
/* 		service.setPrefix = function (value) { 

			prefix = value+"-";
			return prefix;
	
 
        };
		service.getPrefix = function (value) { 

			return prefix;
	
 
        }; 
		service.setHiddenStorage = function (value) { 
			if(value === true || value === false)
			hiddenStorage = value;
	
 
        }; */
			
        service.put = function (key,value) { 

			store[prefix+key] = {key:value};
	
 
        };
		
		service.get = function (key) { 
			try{
				console.log(store);
				return store[prefix+key].key;
			}catch(e){
				return 'undefined';
			}
					
        };
		
		 service.remove = function (key) { 
		 	
       delete store[prefix+key];
 
        }; 
        service.reset = function () { 
		 	
        store = {};
 
        };

		$.slstorage = service;	
	
})();
