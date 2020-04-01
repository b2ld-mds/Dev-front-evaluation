$(document).ready(function(){
	$('div').height($('div').width());



$('#vignette1').click(function(){
        $('iframe').attr('src', 'https://www.youtube.com/embed/TJXsf1zpP-0')
        $('iframe').show();
    });

$('#vignette2').click(function(){
		$('iframe').attr('src', 'https://www.youtube.com/embed/XU_8704KJVU')
        $('iframe').show();
    });

$('#vignette3').click(function(){
	 	$('iframe').attr('src', 'https://www.youtube.com/embed/ORGI4IelZ0I')
        $('iframe').show();
    });

var $loupe = $('<div id="loupe"></div>').appendTo('#tableau').css("display","none");
		$('td').hover(
	function(){
		$loupe.css('display','block');
		var $text = $(this).text();
		console.log($text);
		$loupe.text($text);
	},
	function(){
		$loupe.css('display','none');
	}

);

$('#boutonbox').click(function(){
        $('#box').show();
        $('#videos').hide();
        $('#tableau').hide();
});

$('#boutonvideo').click(function(){
        $('#videos').show();
        $('#box').hide();
        $('#tableau').hide();
});

$('#boutontableau').click(function(){
        $('#tableau').show();
        $('#box').hide();
        $('#videos').hide();
});

});




