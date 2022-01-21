var el = document.getElementById("footerSignatureDate")
el.innerHTML = new String(new Date()).split(" ").slice(1,4).join(" ")