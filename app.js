(() => {
 const c=window.SITE_CONFIG||{};
 const link=(id,url)=>{const e=document.getElementById(id);if(!e)return;e.href=url||"#";if(!url||url.includes("example.com")||url.includes("YourTelegramUsername"))e.addEventListener("click",x=>{x.preventDefault();alert("Add your real link in assets/config.js first.");});};
 ["navTelegram","heroTelegram","bottomTelegram"].forEach(id=>link(id,c.telegramUrl));
 const a=c.android||{},w=c.windows||{};
 document.getElementById("androidVersion").textContent=a.version||"—";
 document.getElementById("androidSize").textContent=a.size||"—";
 document.getElementById("windowsVersion").textContent=w.version||"—";
 document.getElementById("windowsSize").textContent=w.size||"—";
 link("androidDownload",a.url);link("windowsDownload",w.url);
 (c.updates||[]).forEach(u=>{const card=document.createElement("article"),head=document.createElement("div"),h=document.createElement("h3"),v=document.createElement("span"),date=document.createElement("time"),ul=document.createElement("ul");card.className="update";h.textContent=u.title||"Update";v.textContent="v"+(u.version||"");head.className="updatehead";head.append(h,v);date.textContent=u.date||"";(u.notes||[]).forEach(n=>{const li=document.createElement("li");li.textContent=n;ul.append(li);});card.append(head,date,ul);document.getElementById("updateList").append(card);});
 document.getElementById("year").textContent=new Date().getFullYear();
})();