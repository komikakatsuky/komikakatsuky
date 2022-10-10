Script untuk next and prev
Pemanggilanya 
<div id=”jagoankode”>

</div>

<div id=”jagoankodeblog”>

</div>

 


<script type='text/javascript'>
//<![CDATA[
var jumlahpost = 8;
var ambilpost = 0;
var alamatsitus = "https://www.komikakatsuky.my.id";
var snippet = 50;
var tombolkiri, tombolkanan;
function jagoankodefeed(e,t){for(var n=e.split("<"),r=0;r<n.length;r++)-1!=n[r].indexOf(">")&&(n[r]=n[r].substring(n[r].indexOf(">")+1,n[r].length));return n=n.join(""),n=n.substring(0,t-1)}function showjagoankode(e){var t,n,r,a,i,s="";tombolkiri="",tombolkanan="";for(var l=0;l<e.feed.link.length;l++)"previous"==e.feed.link[l].rel&&(tombolkiri=e.feed.link[l].href),"next"==e.feed.link[l].rel&&(tombolkanan=e.feed.link[l].href);for(var d=0;d<jumlahpost&&d!=e.feed.entry.length;d++){t=e.feed.entry[d],n=t.title.$t;for(var l=0;l<t.link.length;l++)if("alternate"==t.link[l].rel){r=t.link[l].href;break}i="content"in t?t.content.$t:"summary"in t?t.summary.$t:"",a="media$thumbnail"in t?t.media$thumbnail.url:"https://3.bp.blogspot.com/-BHuXHny1kOk/VXrkSyxKCjI/AAAAAAAACas/pZLJAEUDtds/s1600/no-image.png",s+="<div class='jagoankodeblogspot'>",s+="<a href='"+r+"'><img src='"+a+"' /></a>",s+="<h6><a href='"+r+"'>"+n+"</a></h6>",s+="<p>"+jagoankodefeed(i,snippet)+"</p>",s+="</div>"}document.getElementById("jagoankode").innerHTML=s,s="",s+=tombolkiri?"<a href='javascript:navigasifeed(-1);' class='previous'><i class='fa fa-chevron-left'></i></a>":"<span class='noactived previous'><i class='fa fa-chevron-left'></i></span>",s+=tombolkanan?"<a href='javascript:navigasifeed(1);' class='next'><i class='fa fa-chevron-right'></i></a>":"<span class='noactived next'><i class='fa fa-chevron-right'></i></span>",s+="<a href='javascript:navigasifeed(0);' class='home'><i class='fas fa-home'></i></a>",document.getElementById("jagoankodeblog").innerHTML=s}function navigasifeed(e){var t,n;-1==e?(t=tombolkiri.indexOf("?"),n=tombolkiri.substring(t)):1==e?(t=tombolkanan.indexOf("?"),n=tombolkanan.substring(t)):n="?start-index=1&max-results="+jumlahpost+"&orderby=published&alt=json-in-script",n+="&callback=showjagoankode",incluirscript(n)}function incluirscript(e){1==ambilpost&&removerscript(),document.getElementById("jagoankode").innerHTML="<div id='recentpostload'></div>",document.getElementById("jagoankodeblog").innerHTML="";var t=alamatsitus+"/feeds/posts/default/-/Series"+e,n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",t),n.setAttribute("id","jagoankodelabel"),document.getElementsByTagName("head")[0].appendChild(n),ambilpost=1}function removerscript(){var e=document.getElementById("jagoankodelabel"),t=e.parentNode;t.removeChild(e)}onload=function(){navigasifeed(0)};
//]]>
</script>
