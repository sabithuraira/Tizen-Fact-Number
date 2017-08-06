
(function() {
    function launchApp() {
    	console.log("masuk");
    	var radio=$("input[name=jenis]:checked").val();

    	document.getElementById("msg-box").style.display="none";
		document.getElementById("img-load").style.display="inline";
		document.getElementById("img-info").style.display="none";
    	
    	if(radio=="date"){
        	console.log("date");
    		var date=$("#text-date").val();
    		var month=$("#text-month").val();
    		
			$.get("http://numbersapi.com/"+month+"/"+date+"/"+radio, function(result){
				$("#message-header").html("Month: "+month+" date:"+date);
				$("#message-content").html(result);

				document.getElementById("img-info").style.display="inline";
				document.getElementById("msg-box").style.display="block";
		        document.querySelector("#img-load").style.display = "none";
			});
    	}
    	else{
        	console.log("masuk else");
    		var number=$("#text-number").val();
    		console.log("http://numbersapi.com/"+number+"/"+radio);
    		
			$.get("http://numbersapi.com/"+number+"/"+radio, function(result){
				$("#message-header").html(number);
				$("#message-content").html(result);

				document.getElementById("img-info").style.display="inline";
				document.getElementById("msg-box").style.display="block";
		        document.querySelector("#img-load").style.display = "none";
			});
    	}
    }
    
    function changeRadio(){
    	var radio=$("input[name=jenis]:checked").val();
    	
    	if(radio=="date"){
    		document.getElementById("text-date").style.display="inline";
    		document.getElementById("text-month").style.display="inline";

    		document.getElementById("text-date").value="";
    		document.getElementById("text-month").value="";
    		
    		document.getElementById("text-number").style.display="none";
    	}
    	else{
    		document.getElementById("text-date").style.display="none";
    		document.getElementById("text-month").style.display="none";
    		document.getElementById("text-number").style.display="inline";
    		
    		document.getElementById("text-number").value="";
    	}
    }

    function setDefaultEvents() {
        document.querySelector("#btn-call").addEventListener("click", launchApp);
        $("input[type=radio]").on("change", changeRadio);
//        $("input[type=radio]").on("click", changeRadio);

        // Add eventListener for tizenhwkey
        document.addEventListener("tizenhwkey", function(e) {
            if (e.keyName === "back") {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (error) {
                    console.error("getCurrentApplication(): " + error.message);
                }
            }
        });
    }

    /**
     * Initiates the application
     * @private
     */
    function init() {
        setDefaultEvents();
    }

    window.onload = init;
}());
