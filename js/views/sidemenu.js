$(function(){
    $('#left-menu').on('click',function(){		
        $(this).next('#left-group-menu').slideToggle('slide');
        $('#left-menu').hide();
    })

    $('#left-slide-menu').on('click',function() {			        
        $(this).closest('#left-group-menu').slideToggle('slide',function(){
            $('#left-menu').fadeIn();	
        });

    });
    $('#right-menu').on('click',function(){		
        $(this).next('#right-list-group').slideToggle('slide');
        $('#right-menu').hide();
    })
    
    $('#right-slide-menu').on('click',function() {			        
        $(this).closest('#right-list-group').slideToggle('slide',function(){
            $('#right-menu').fadeIn();	
        });

    });
});
			
			