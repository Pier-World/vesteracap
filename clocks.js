(function () {
  const zones = [
    { id: "clock-ny", timeZone: "America/New_York" },
    { id: "clock-sf", timeZone: "America/Los_Angeles" },
  ];

  const formatters = Object.fromEntries(
    zones.map(({ id, timeZone }) => [
      id,
      new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }),
    ])
  );

  function tick() {
    const now = new Date();
    for (const { id } of zones) {
      const el = document.getElementById(id);
      if (!el) continue;
      const value = formatters[id].format(now);
      el.textContent = value;
      el.setAttribute("datetime", now.toISOString());
    }
  }

  tick();
  setInterval(tick, 1000);
})();
