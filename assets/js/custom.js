/* Smooth Scroll */
$(".scrollTo").on('click', function(e) {
	e.preventDefault();
	var target = $(this).attr('href');
	$('html, body').animate({
		scrollTop: ($(target).offset().top)
	}, 700);
});

$('#selectLanguageDropdown').localizationTool({
	'defaultLanguage' : 'en_GB',
	'showFlag': true,
	'showCountry': true,
	'showLanguage': true, 
	'strings' : {
		'Get Your MVP Done' : {
			'de_DE' : 'German translation here'
		},
		'class:introduction-text' :{
			'de_DE' : 'German Introduction Text'
		}
	}
});

$.getJSON("http://freegeoip.net/json?callback=?", function(data) {
	var country_code = data.country_code;
	var country = data.country_name;
	var ip = data.ip;
	var time_zone = data.time_zone;
	var latitude = data.latitude;
	var longitude = data.longitude;

	if (country == 'Germany'){
		$('#selectLanguageDropdown').localizationTool('translate', 'de_DE');
	}
});

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72344405-3', 'auto');
  ga('send', 'pageview');
