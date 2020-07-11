//<![CDATA[
!function(n){var e=n(".topic-nav-cont a.next"),r=n(".topic-nav-cont a.prev");n.get(e.attr("href"),function(t){e.html("<span class='texxattt'>المقال التالي</span> <span class='posttitle'>"+n(t).find(".entry-title").text()+"</span>")},"html"),n.get(r.attr("href"),function(t){r.html("<span class='texxattt'>المقال السابق</span> <span class='posttitle'>"+n(t).find(".entry-title").text()+"</span>")},"html")}(jQuery);
//]]>
