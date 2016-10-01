var broken_url = "alm://caliberrm!v120p060_20000_110/;

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
    var url_dest = links[i].href;

    if (url_dest.indexOf(broken_url) > -1) {
        var new_id = url_dest.match(/110\/(.*);ns=requirement/)[1];
        var window_url = window.location.href;
        var old_id = window_url.match(/requirementDocument=(.*?)&/)[1];
        var new_url = window_url.replace(old_id, new_id);
        links[i].href = new_url;
    }

}
