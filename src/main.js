
setTimeout(function() { 
    // Elements
    const toggle = document.getElementById("toggle-sidebar");
    const sidebar = document.getElementById("sidebar");

    toggle.addEventListener("click", function (e) {
        sidebar.classList.contains("active") ?  isActive() : notActive();
    });

    function isActive() {
        sidebar.classList.remove("active");
        toggle.classList.remove("fa-close");
        toggle.classList.add("fa-layer-group");
        document.body.classList.remove("no-scroll");
    }

    function notActive() {
        sidebar.classList.add("active");
        toggle.classList.remove("fa-layer-group");
        toggle.classList.add("fa-close");
        document.body.classList.add("no-scroll");
    }

}, 1000);