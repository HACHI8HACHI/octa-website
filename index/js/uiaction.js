
// ページ遷移関数 メイン画面からシーズン画面へ移動
function movePage(blockScNm){
	let scArray = 
	[
		"scmain", 
		"sctrmSea1", "sctrmSea1Vol1", "sctrmSea1Vol2", "sctrmSea1Vol3", 
		"sctrmSea2", "sctrmSea2Vol1", "sctrmSea2Vol2", "sctrmSea2Vol3", 
		"sctrmSea3", "sctrmSea3Vol1", "sctrmSea3Vol2", "sctrmSea3Vol3",
	];
	for (var i=0; i<scArray.length; i++) {
		document.getElementById(scArray[i]).style.display = "none";
		let vclass = document.getElementsByClassName("v"+scArray[i]);
		if (vclass.length > 0) {
			for (var j=0; j<vclass.length; j++) {
				vclass[j].pause();
			}
		}
	}
	document.getElementById(blockScNm).style.display = "block";
}

// mainクラス取得
let main = document.getElementsByClassName("tomain");
for (var i=0; i<main.length; i++) {
	main[i].addEventListener('click',()=>{
		movePage("scmain");
	});
};


// 登竜門のクラス取得
// 項目の配列
let itemArr = ["totrm"];
for (var i=0; i<itemArr.length; i++){
	let itemStr = itemArr[i];
	// season
	for (var j=1; j<4; j++){
		let seaStr = itemStr + "Sea" + j.toString();
		// vol
		for (var k=0; k<4; k++) {
			let volStr = "";
			if (k==0) {
				volStr = seaStr;
			}else {
				volStr = seaStr+"Vol"+k.toString();
			}
			let mpNms = document.getElementsByClassName(volStr);
			for (var l=0; l<mpNms.length; l++) {
				mpNms[l].addEventListener('click',()=>{
					movePage(volStr.replace("to","sc"));
				});
			};
		}
	}
}
