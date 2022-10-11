<div id="jagoankode">
</div>
<div id="jagoankodeblog">
</div>
<style scoped="" type="text/css">
*{padding:0;margin:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-box-sizing:border-box}
a,a:link,a:visited{text-decoration:none;transition:all .3s}
button,input[type="button"],input[type="reset"],input[type="submit"],.button{border:0;color:#fff;cursor:pointer;font-size:14px;font-weight:400;white-space:normal;width:auto;border-radius:3px;outline:0}button:focus,button:hover,input[type="button"]:focus,input[type="button"]:hover,input[type="reset"]:focus,input[type="reset"]:hover,input[type="submit"]:focus,input[type="submit"]:hover,.button:focus,.button:hover{color:#fff}
#recentpostnav{border:1px solid #585858;width:100%;margin:0 auto}
#jagoankode{margin:0}
#jagoankode .jagoankodeblogspot{width:48.9%;background:#fff;display:inline-block;padding:15px;overflow:hidden;box-shadow:0 2px 3px rgba(0,0,0,0.06),0 2px 3px rgba(0,0,0,0.1)}
#jagoankode .jagoankodeblogspot:nth-child(even){margin:0 0 0px 0}
#jagoankode .jagoankodeblogspot img{background:#ecf0f1;padding:0;float:left;margin:0;margin-right:13px;width:72px}
#jagoankode .jagoankodeblogspot h6,.jagoankodeblogspot h6 a{text-decoration:none;font-size:14px;font-weight:400;margin:0;color:#000}
#jagoankode .jagoankodeblogspot:hover{background-color:#fefefe}
#jagoankode .jagoankodeblogspot p{font-size:12px;text-align:left;color:#555;line-height:normal;margin:5px 0}
#recentpostload{letter-spacing:-10px;text-align:center;background:transparent url(https://2.bp.blogspot.com/-GeeSB564W-o/Wum3zpg8qNI/AAAAAAAAGmM/aRoomVJFtSQfUoAJrRjD6h1wTSU8J8DUQCLcBGAs/s1600/ellipsis-preloader.gif) no-repeat 50% 50%;height:470px}
#jagoankodeblog{display:table;padding:5px 10px 5px 0;text-align:left;margin:15px auto}
#jagoankodeblog a{color:#141414;font-size:12px;font-weight:400;display:block;padding:5px 10px}
#jagoankodeblog span{padding:0;cursor:pointer;transition:all .3s}
#jagoankodeblog .next,#jagoankodeblog .previous{position:relative;overflow:hidden;display:inline-block;background:#fff;color:#ff0202;padding:10px 16px;font-size:1rem;box-shadow:0 2px 3px rgba(0,0,0,0.06),0 2px 3px rgba(0,0,0,0.1)}
a img{border:none;border-width:0;outline:none;border-radius: 100em;}
#jagoankodeblog .next{float:right;margin:0 0 0 10px}
#jagoankodeblog .previous{float:left;margin:0 10px 0 0}
#jagoankodeblog .home{text-align:center;display:table;background:#fff;color:#222;font-size:1rem;float:none;padding:10px 16px;border-radius:99em;margin:auto;box-shadow:0 2px 3px rgba(0,0,0,0.06),0 2px 3px rgba(0,0,0,0.1)}
#jagoankodeblog a:hover,#jagoankodeblog span.noactived{color:#ccc}
#jagoankodeblog i{font-family:fontawesome;font-style:normal}
#jagoankodeblog .next:hover,#jagoankodeblog .previous:hover,#jagoankodeblog .home:hover{background:#fff;color:#222;box-shadow:0 10px 21px rgba(0,0,0,0.15),0 6px 6px rgba(0,0,0,0.12)}
@media screen and (max-width:993px){#jagoankode .jagoankodeblogspot{width:100%;margin:0 0 10px 0}}
</style>
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
