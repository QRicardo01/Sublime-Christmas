var PageLogic = function(){
	'use strict';

	return {
		windowsMinimized: false,
		showSublimeText: true,
		lines: 17,
		init: function(){
			var functions = ["toString","function","css()","siblings()","stop()","get()","ready()","floor","delay","text","animate","Set","Children()","append()","addClass()","include()","isNaN()","size()","random","Math"];
			var controlStructure = ["array","throw","do_while()","for","foreach","try","while","return","label","break","continue"];
			var css = ["textAlign","position","opacity","top","padding","visibility","content","color","cursor","left","top","width","bottom","height","font","grid","border","background","all","align-self"];
			var conditions = ["if","or","else","switch","elseif","case"];
			var html = ["fill","button","hr","li","id","progress","textarea","fieldset","header","script"];
			var commonwords = ["length","var","log","NaN","template","$()","protected","private","public"];
			var reservedWords = ["this","self","parent","extends","default","delete","export","interface","static","implements","package"];
			var arregloWords = [functions,controlStructure,css,html,commonwords,reservedWords,conditions];
			var charactersQty = 3; //qty de caracteres a permitir en la linea

			//tree builders
			for (var i = 0; i <= 11; i++) {
				var remainingCharQty = charactersQty;
				var line = "" ;

				//line building
				while(remainingCharQty > 1) {			

					var randGroup = Math.floor(Math.random()*arregloWords.length);
					var randWords = Math.floor(Math.random()*arregloWords[randGroup].length);
					var word = arregloWords[randGroup][randWords];
					var letterQty = word.length;
					var string = remainingCharQty - (letterQty+1);
					var space = (letterQty < remainingCharQty)? " " : "";
					
					if (letterQty <= remainingCharQty){
						line += "<span id='span"+randGroup+"'>"+ word + "</span>" + space;
					 	letterQty += space.length;
						remainingCharQty -= letterQty;
					}
				}
				
				//words impression
				$("#wordsContainer").append("<p>" + line + "</p>");

				//for each tree triangle
				switch(i){
					case 3:
						charactersQty = 14;
						break;
					case 7:
						charactersQty = 26;
						break;
					default:
						charactersQty += 7;
						break;
				}
			}
			for (var i = 0; i <= 2; i++) {
				var treeTrunk = "Merry<wbr>X<wbr>mas<wbr>";
				$("#treeTrunk").append("<p>"+treeTrunk+"</p>");
			}
			
			setInterval(function(){ PageLogic.switchWordsByLights()},1200);
			setInterval(function(){ PageLogic.switchWordsByLights()},1100);
			setInterval(function(){ PageLogic.switchWordsByLights()},1000);	
		},
		switchWordsByLights: function(){
			var treeChildren = $("#wordsContainer").children();
			var randomLine = Math.floor((Math.random()*treeChildren.length)-1);
			var lineOne = treeChildren.get(randomLine);
			var randomWord = Math.floor((Math.random()*$(lineOne).children().length)-1);
			var span = $(lineOne).children().get(randomWord);
			var idOne = $(span).attr("id");
			var selectWord = $(span).text();

			var j = 4;
			while(j > 0){
				var treeChildrenTwo = $("#wordsContainer").children();
				var randomLineTwo = Math.floor((Math.random()*treeChildrenTwo.length)-1);
				var lineTwo = treeChildrenTwo.get(randomLineTwo);
				var randomWordTwo = Math.floor((Math.random()*$(lineTwo).children().length)-1);
				var spanTwo = $(lineTwo).children().get(randomWordTwo);
				var idTwo = $(spanTwo).attr("id");
				var selectWordTwo = $(spanTwo).text();
				j--;
				if ((selectWord.length === selectWordTwo.length) && (selectWord != selectWordTwo)) {
					
					$(span).css({"text-shadow": "0px 0px 0.5px #1B232D"});
					$(spanTwo).css({"text-shadow": "0px 0px 0.5px #1B232D"});

					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 0.5px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 0.5px white"});
					},400);
					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 1px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 1px white"});
					},650);
					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 4px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 4px white"});
					},800);
					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 5px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 5px white"});
					},950);
					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 10px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 10px white"});
					},1200);
					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 5px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 5px white"});
					},1350);
					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 4px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 4px white"});
					},1500);
					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 3px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 3px white"});
					},1650);
					setTimeout(function(){
						$(span).css({"text-shadow": "0px 0px 1px white"});
						$(spanTwo).css({"text-shadow": "0px 0px 1px white"});
					},1900);
				 	setTimeout(function(){
				 		$(span).attr("id",idTwo);
				 		$(spanTwo).attr("id",idOne);
				 		$(spanTwo).text(selectWord);
				 		$(span).text(selectWordTwo);

				 		$(span).css({"text-shadow": "0px 0px 0.5px #1B232D"});
						$(spanTwo).css({"text-shadow": "0px 0px 0.5px #1B232D"});
				 	},2100);
					j = 0;
				}
			}
		},
		merryXmas: function(){
			
			$("#merryXmas").append("N");
			setTimeout( function(){
				$("#merryXmas").append("u");
			},100);
			setTimeout( function(){
				$("#merryXmas").append("V");
			},200);
			setTimeout( function(){
				$("#merryXmas").append("e");
			},300);
			setTimeout( function(){
				$("#merryXmas").append("c");
			},400);
			setTimeout( function(){
				$("#merryXmas").append("t");
			},500);
			setTimeout( function(){
				$("#merryXmas").append("o");
			},600);
			setTimeout( function(){
				$("#merryXmas").append("r");
			},700);
			setTimeout( function(){
				$("#merryXmas").append(", ");
			},800);
			setTimeout( function(){
				$("#merryXmas").append("w");
			},900);
			setTimeout( function(){
				$("#merryXmas").append("e");
			},1000);
			setTimeout( function(){
				$("#merryXmas").append(" w");
			},1100);
			setTimeout( function(){
				$("#merryXmas").append("i");
			},1200);
			setTimeout( function(){
				$("#merryXmas").append("s");
			},1300);
			setTimeout( function(){
				$("#merryXmas").append("h");
			},1400);
			setTimeout( function(){
				$("#merryXmas").append(" y");
			},1400);
			setTimeout( function(){
				$("#merryXmas").append("o");
			},1500);
			setTimeout( function(){
				$("#merryXmas").append("u");
			},1600);
			setTimeout( function(){
				$("#merryXmas").append(" m");
			},1700);
			setTimeout( function(){
				$("#merryXmas").append("e");
			},1800);
			setTimeout( function(){
				$("#merryXmas").append("r");
			},1900);
			setTimeout( function(){
				$("#merryXmas").append("r");
			},2000);
			setTimeout( function(){
				$("#merryXmas").append("y");
			},2100);
			setTimeout( function(){
				$("#merryXmas").append(" c");
			},2200);
			setTimeout( function(){
				$("#merryXmas").append("h");
			},2300);
			setTimeout( function(){
				$("#merryXmas").append("r");
			},2400);
			setTimeout( function(){
				$("#merryXmas").append("i");
			},2500);
			setTimeout( function(){
				$("#merryXmas").append("s");
			},2600);
			setTimeout( function(){
				$("#merryXmas").append("t");
			},2700);
			setTimeout( function(){
				$("#merryXmas").append("m");
			},2800);
			setTimeout( function(){
				$("#merryXmas").append("a");
			},2900);
			setTimeout( function(){
				$("#merryXmas").append("s");
			},3000);
			setTimeout( function(){
				$("#merryXmas").append("...");
			},3100);
			setTimeout( function(){
				$("#merryXmas").append("<span id='barra'>|</span>");
			},3250);
		},
		barra: function(){
			var barr = $("#barra").css({"color":"white"});
			setTimeout( function(){
				barr = $("#barra").css({"color":"#1B232D"});
			},300);
		},
		windowCloset: function(){
			$("#windowClsoset, #alertSkype, #marginOfApplication").draggable({
				scroll: false, 
				scrollSpeed: 100, 
				scrollSensitivity: 100
			});	
		},
		closet: function(){
			$("#closet").click( function(){
				$("#alertCloset, #backgroundBlack").toggle();
			});
		},
		hide: function(){
			$("#hide, #iconSublimeText").click( function(){
				if (PageLogic.showSublimeText) {
					$("#sublimeText").hide();
					var childOfMarginOfNewYear = $("#newYear").find("div");
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(0).show();
					},100);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(1).show();
					},200);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(2).show();
					},300);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(3).show();
					},400);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(4).show();
					},500);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(5).show();
					},600);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(6).show();
					},700);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(7).show();
					},800);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(8).show();
					},900);
					setTimeout( function(){
						$(childOfMarginOfNewYear).eq(9).show();
					},1000);
					PageLogic.showSublimeText = false;
				}
				else{
					$("#sublimeText").show();
					$("#newYear > div").hide();
					PageLogic.showSublimeText = true;
				}
			});
		},
		toggleSublimeText: function(){
			$("#minimize").click( function(){
				if (!PageLogic.windowsMinimized){
					PageLogic.lines = 26;

					$("#accountant > p").remove();
					PageLogic.accountant(PageLogic.lines);

					$("#sublimeText").removeClass("maximizeSublimeText");
					$("#sublimeText").addClass("minimizeSublimeText");
					
					$("#wordsContainer").removeClass("maximizeWordsContainer");
					$("#wordsContainer").addClass("minimizeWordsContainer");

					$("#treeTrunk").removeClass("maximizeTreeTrunk");
					$("#treeTrunk").addClass("minimizeTreeTrunk");
					
					$("#merryXmas").removeClass("maximizeMerryXmas");
					$("#merryXmas").addClass("minimizeMerryXmas");

					$("#accountant").removeClass("maximizeAccountant");
					$("#accountant").addClass("minimizeAccountant");

					$("#window").slimScroll();
					PageLogic.windowsMinimized = true;
				} else {
					PageLogic.lines = 17;
					$("#accountant > p").remove();
					PageLogic.accountant(PageLogic.lines);
					
					$("#window").slimScroll({destroy: true});
					$("#window").removeAttr("style");
					$("#window").removeClass("windowScroll");

					$("#sublimeText").removeClass("minimizeSublimeText");
					$("#sublimeText").addClass("maximizeSublimeText");

					$("#wordsContainer").removeClass("minimizeWordsContainer");
					$("#wordsContainer").addClass("maximizeWordsContainer");

					$("#treeTrunk").removeClass("minimizeTreeTrunk");
					$("#treeTrunk").addClass("maximizeTreeTrunk");

					$("#merryXmas").addClass("maximizeMerryXmas");
					$("#merryXmas").removeClass("minimizeMerryXmas");

					$("#accountant").removeClass("minimizeAccountant");
					$("#accountant").addClass("maximizeAccountant");
					PageLogic.windowsMinimized = false;
				}
				
			});
		},
		accountant: function($num){
			for (var i = 1;i <= $num; i++) {
				$("#accountant").append("<p>"+i+"</p>");	
			}
		},
		Taskbar: function(){
			var horizontalBar = "<div id='toggleAlert'><button type='button' class='button buttonOK' onclick='"+"$(\"#groupAlerts\").children().hide();$(\"#backgroundBlack\").hide()"+"'> OK </button></div>";
			var alert = "<img src='http://www.bauru.usp.br/wp-content/uploads/alerta-300x290.png' id='iconAlert'></img>";
			$("#groupAlerts").append("<div id='alertSkype' class='alerts closetAlert'></div><div id='alertBrowsers' class='alerts closetAlert'></div><div id='alertGeneral' class='alerts closetAlert'></div><div id='alertEmpty' class='alerts closetAlert'></div>");

			$("#iconSkype").click( function(){
				$("#alertSkype").append(alert +"<p>In the north pole there is no internet, Santa prefers that you send him your letters.</p>"+ horizontalBar);
				$("#alertSkype, #backgroundBlack, #pyrotechnics").toggle();
				$("#pyrotechnics").attr("onclick","var r=2+parseInt(4+3);for(var i=r; i--;){setTimeout('createFirework(68,46,8,7,null,null,null,null,false,true)',(i+1)*(1+parseInt(Math.random()*1000)));}return false");
			});
			$("#iconChrome, #iconFirefox, #iconSafari, #iconOpera").click( function(){
				$("#alertBrowsers").append(alert +"<p>You do not have to look for Christmas, she will find you.</p>"+ horizontalBar);
				$("#alertBrowsers, #backgroundBlack, #pyrotechnics").toggle();
				$("#pyrotechnics").attr("onclick","var r=2+parseInt(2+5);for(var i=r; i--;){setTimeout('createFirework(63,62,6,5,null,null,null,null,false,true)',(i+1)*(1+parseInt(Math.random()*1000)));}return false");
			});
			$("#iconItunes, #iconMysqlWorkbench, #iconVlc, #iconAppStore").click( function(){
				$("#alertGeneral").append(alert +"<p>You can not change the Christmas.</p>"+ horizontalBar);
				$("#alertGeneral, #backgroundBlack, #pyrotechnics").toggle();
				$("#pyrotechnics").attr("onclick","var r=2+parseInt(3*3);for(var i=r; i--;){setTimeout('createFirework(59,50,6,5,null,null,null,null,false,true)',(i+1)*(1+parseInt(Math.random()*1000)));}return false");
			});
			$("#iconTrashEmpty").click( function(){
				$("#alertEmpty").append(alert +"<p>Do not eliminate Christmas.</p>"+ horizontalBar);
				$("#alertEmpty, #backgroundBlack, #pyrotechnics").toggle();
				$("#pyrotechnics").attr("onclick","var r=4+parseInt(3*22);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}return false");
			});
			$("#backgroundBlack, #pyrotechnics").click( function(){
				$("#backgroundBlack, #groupAlerts>div").hide();
			});	
			$("#marginOfTaskbar").hover( function(){
				$("#signageToUpload").children().toggle();
			});
		}
	};
}();
$(document).ready(function(){
	PageLogic.init();
	PageLogic.switchWordsByLights();
	PageLogic.merryXmas();
	PageLogic.barra();
	PageLogic.windowCloset();
	PageLogic.toggleSublimeText();
	PageLogic.accountant(17);
	PageLogic.hide();
	PageLogic.closet();
	PageLogic.Taskbar();
	setInterval(function(){PageLogic.barra();},600);

});