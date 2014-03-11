
(function($) {


   var menuName;
   var menuElement;
   var notifications={};
   var categories=[];
   var count;
   var colorCount=0;
   var circleColor=["#FF7373","#18BB9B","#F99F1C","#86A4F1"];
  var markup='<span class="notification-bubble" title="Notifications">0</span>';
$.notificationMenu  = { //xml string  to get DataDefinition 
	
   initializeMenu: function(data)
   { 
   	    $.each(data, function(key, value) 
   	    {
   	    	var menuItems= new $.notificationMenu.menuItem(key,value);
	   		var createmenuItems=new $.notificationMenu.createMenu(key,menuItems);   
	     	$.notificationMenu.createBubble(menuItems);
	    });
     
   },
   menuItem: function(key,value)
   {  	    
   	this.menuName=key;
   	this.menuElement=value;
   	this.count=0;
   	this.bubble={}; 
   },
   createMenu:function(key,menuItems)
   { 
   
   	categories.push(key);
   	
   	notifications[key]={};
   	notifications[key].count=0;
   	notifications[key].element=menuItems.menuElement;
     	
   },
   createBubble:function(menuItems)
   { 
   	//console.log(menuItems.menuElement);
   		
   	if(colorCount==0)
   	 {  	
	   	 $(menuItems.menuElement).append(markup).find('.notification-bubble').css({backgroundColor:circleColor[colorCount],display:'inline'});
	   	 colorCount=colorCount+1;
   	 }
   	 else
   	 {
   	 	console.log(circleColor[colorCount]+menuItems.menuElement);
    	 $(menuItems.menuElement).append(markup).find('.notification-bubble').css({backgroundColor:circleColor[colorCount],display:'inline'});
    	  colorCount=colorCount+1;
    	     	 }
            
   },
   updateBubble:function(data)
   { 
	  // console.log(notifications[data].element);
	 
	   	notifications[data].count=notifications[data].count+1;
	   	console.log(notifications[data].count);
	   	$(notifications[data].element + ' .notification-bubble').html(notifications[data].count);
	            
   },
   updateMenu:function(data)
   {   
   	$.each(data, function(key, value) 
   	 {  
   	  console.log(key+"---"+value);
	  $.notificationMenu.updateBubble(value);
	 });
   } 
     
 };
 }
)(jQuery);