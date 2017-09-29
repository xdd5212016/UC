window.onload = function(){
			var imgs = document.getElementsByClassName('imgs');
			var spans = document.getElementsByTagName('span');
			(function banner(a){
				var idx = a;
				if(idx >= imgs.length )idx = 0; 
				for (var i = 0; i < imgs.length; i++) {
					if (idx == i) {
						imgs[i].style.zIndex = 100;
						spans[i].className = 'foucs';
					}else{
						imgs[i].style.zIndex = 1;
						spans[i].className = "";
					}
				}
				setTimeout(function(){
					banner(++idx);
				},3000)
			})(0);

	var banner = document.getElementById('banner');

			banner.addEventListener('click', function(e){
				for (var i =0; i < imgs.length; i++) {
					if (i == e.target.innerHTML) {
						imgs[i].style.zIndex = 100;
						spans[i].className = 'foucs';
					} else {
						imgs[i].style.zIndex = 1;
						spans[i].className = "";
					}
				}
			});
		var up = document.getElementsByClassName('up')[0];
		var down = document.getElementsByClassName('down')[0];
		var links = document.getElementsByClassName('links')[0];
		var link_d = document.getElementsByClassName('link_d')[0];
		var uptwo = document.getElementsByClassName('uptwo')[0];
		var downtwo = document.getElementsByClassName('downtwo')[0];
		var flink = document.getElementsByClassName('flink')[0];
		down.onmouseenter = function(){
			if(down.className =='down'){
				links.style.height ='50px';
				down.className = 'up down';
			}else{
				links.style.height ='28px';
				down.className = 'down';

			}
		}
		uptwo.addEventListener('mouseenter',function(e){
			if(e.target.className == "uptwo"){
				flink.style.height = '50px';
				e.target.className = 'downtwo uptwo';
			}else{
				flink.style.height = '20px';
				e.target.className = 'uptwo';
			}
		})
}