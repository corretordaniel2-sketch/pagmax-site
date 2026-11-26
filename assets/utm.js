/* Repassa UTMs/src/sck da URL da página para os links de checkout Kiwify (a Kiwify aceita src, sck, utm_source, utm_medium, utm_campaign, utm_term, utm_content, s1, s2, s3).
   Sem cookies próprios, sem coleta de dados pessoais. Se a pessoa chegou sem UTM, ficam as UTMs padrão do link (utm_source=pagmax). */
(function(){try{
var k=['src','sck','utm_source','utm_medium','utm_campaign','utm_term','utm_content','s1','s2','s3'];
var inc=new URLSearchParams(location.search),has=k.some(function(x){return inc.get(x)});
if(!has)return;
document.querySelectorAll('a[data-checkout]').forEach(function(a){
var u=new URL(a.href),pos=u.searchParams.get('utm_content');
k.forEach(function(x){var v=inc.get(x);if(v)u.searchParams.set(x,v)});
if(pos&&!inc.get('sck'))u.searchParams.set('sck','pagmax_'+pos);
a.href=u.toString();});
}catch(e){}})();
