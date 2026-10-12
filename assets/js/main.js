(function () {
  var root = document.documentElement;
  root.classList.add("js");

  // Theme toggle — remembers the choice when storage is available
  var themeBtn = document.querySelector(".theme");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.dataset.theme ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Local clock
  var clock = document.querySelector("[data-clock]");
  if (clock) {
    var fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit", minute: "2-digit", timeZone: clock.dataset.clock
    });
    var tick = function () { clock.textContent = fmt.format(new Date()) + " IST"; };
    tick();
    setInterval(tick, 30000);
  }

  // Career "uptime" since the start date
  var up = document.querySelector("[data-uptime]");
  if (up) {
    var start = new Date(up.dataset.uptime);
    var now = new Date();
    var months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
    if (months >= 0) up.textContent = Math.floor(months / 12) + "y " + (months % 12) + "m";
  }

  // Copy email
  var toast = document.querySelector(".toast");
  var showToast = function (msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(function () { toast.classList.remove("show"); }, 1800);
  };
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!navigator.clipboard) return showToast(btn.dataset.copy);
      navigator.clipboard.writeText(btn.dataset.copy).then(
        function () { showToast("Email copied"); },
        function () { showToast(btn.dataset.copy); }
      );
    });
  });

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  items.forEach(function (el) { io.observe(el); });
})();
