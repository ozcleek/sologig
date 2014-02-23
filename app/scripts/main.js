console.log('\'Allo \'Allo!');

$(".singularity").click(function(){
	$(".singularityimg").first().show("fast", function showPic(){
		$( this ).next(".singularityimg").show("fast", showPic );
	});
});


$(".infinity").click(function(){
	$(".infinityimg").first().show("fast", function showPic(){
		$( this ).next(".infinityimg").show("fast", showPic );
	});
});

$(".transcendental").click(function(){
	$(".transcendentimg").first().show("fast", function showPic(){
		$( this ).next(".transcendentimg").show("fast", showPic );
	});
});

$(".ontological").click(function(){
	$(".ontologyimg").first().show("fast", function showPic(){
		$( this ).next(".ontologyimg").show("fast", showPic );
	});
});

$(".epicurian").click(function(){
	$(".epicurianismimg").first().show("fast", function showPic(){
		$( this ).next(".epicurianismimg").show("fast", showPic );
	});
});

$(".fatalism").click(function(){
	$(".fatalismimg").first().show("fast", function showPic(){
		$( this ).next(".fatalismimg").show("fast", showPic );
	});
});
	
$(".environmentalism").click(function(){
	$(".environmentalismimg").first().show("fast", function showPic(){
		$( this ).next(".environmentalismimg").show("fast", showPic );
	});
});


$(".existentialism").click(function(){
	$(".existentialismimg").first().show("fast", function showPic(){
		$( this ).next(".existentialismimg").show("fast", showPic );
	});
});

