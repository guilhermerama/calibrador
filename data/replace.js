var brokenUrl = "alm://caliberrm";

window.addEventListener("click", function(event) {
    var link = event.target;
    var mouseButton = event.which

    if (mouseButton == 1) {
        while (link && link.localName != "a")
            link = link.parentNode;

        if (link != null) {

            var urlDestino = link.href;

            if (urlDestino.indexOf(brokenUrl) > -1) {
                var novoId = urlDestino.match(/110\/(.*);ns=requirement/)[1];
                var windowUrl = window.location.href;
                var velhoId = windowUrl.match(/requirementDocument=(.*?)&/)[1];
                var urlDestino = windowUrl.replace(velhoId, novoId);
                self.port.emit("click", urlDestino);
                event.preventDefault();
            }

        }


    }
}, false);
