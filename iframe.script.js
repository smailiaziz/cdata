$reacAct =0;
$(document).scroll(function(){if ($(window).scrollTop() &gt; 200) {if(!$reacAct) $(&#39;.reactions-iframe&#39;).attr(&#39;src&#39; , $(&#39;.reactions-iframe&#39;).attr(&#39;data-src&#39;));$reacAct =1;}})
$(window).scroll(function() {if ($(window).scrollTop() &gt; 200) {if(!$reacAct) $(&#39;.reactions-iframe&#39;).attr(&#39;src&#39; , $(&#39;.reactions-iframe&#39;).attr(&#39;data-src&#39;));$reacAct =1;}});
