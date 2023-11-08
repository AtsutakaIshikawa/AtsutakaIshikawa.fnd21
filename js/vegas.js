$(function() {
    $('#mainimg').vegas({
        slides: [
            { src: './images/potrait_blueshirts.jpg' },	//1枚目の写真指定
            { src: './images/potrait_MRS.jpg' },	//2枚目の写真指定
            { src: './images/oceandive.jpg' },	//3枚目の写真指定
            { src: './images/potrait_jp_style.jpg' },	//4枚目の写真指定
            { src: './images/artmuseum.jpg' },	//5枚目の写真指定
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 7000,				//次の画像を表示するまでの時間
		animationDuration: 10000,	//アニメーション間の引き継ぎタイミング。
    });
});




$(function() {
    $('#mainimg2').vegas({
        slides: [
            { src: './images/church.jpg' },	//1枚目の写真指定
            { src: './images/disneycindy.jpg' },	//2枚目の写真指定
            { src: './images/montsaintmichel.jpg' },	//3枚目の写真指定
            { src: './images/noichevan.jpg' },	//4枚目の写真指定
            { src: './images/sagradafamilia.jpg' },	//5枚目の写真指定
            { src: './images/santrini.jpg' },	//6枚目の写真指定
            { src: './images/stendglass.jpg' },	//7枚目の写真指定
            { src: './images/venezia.jpg' },	//8枚目の写真指定
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 10000,	//アニメーション間の引き継ぎタイミング。
    });
});
