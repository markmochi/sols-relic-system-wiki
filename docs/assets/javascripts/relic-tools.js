document.addEventListener("DOMContentLoaded", () => {
  const xpForLevel = level => Math.round(100 + 30 * level + 5 * level * level);

  document.querySelectorAll("[data-relic-xp-calculator]").forEach(root => {
    const current = root.querySelector("[name=current_level]");
    const currentXp = root.querySelector("[name=current_xp]");
    const target = root.querySelector("[name=target_level]");
    const core = root.querySelector("[name=core_xp]");
    const output = root.querySelector("[data-result]");

    const calculate = () => {
      const from = Math.max(0, Number(current.value) || 0);
      const progress = Math.max(0, Number(currentXp.value) || 0);
      const to = Math.max(from, Math.min(24, Number(target.value) || from));
      const perCore = Math.max(1, Number(core.value) || 1);
      let needed = -progress;
      for (let level = from + 1; level <= to; level++) needed += xpForLevel(level);
      needed = Math.max(0, needed);
      const count = Math.ceil(needed / perCore);
      const overflow = Math.max(0, count * perCore - needed);
      output.innerHTML = `<strong>${needed.toLocaleString()} Relic EXP</strong> needed — ` +
        `<strong>${count.toLocaleString()} core${count === 1 ? "" : "s"}</strong>` +
        `${overflow ? `, with ${overflow.toLocaleString()} EXP carried into later levels.` : "."}`;
    };
    root.querySelector("button").addEventListener("click", calculate);
    [current, currentXp, target, core].forEach(el => el.addEventListener("change", calculate));
    calculate();
  });

  document.querySelectorAll("[data-effective-stat-calculator]").forEach(root => {
    const raw = root.querySelector("[name=raw]");
    const material = root.querySelector("[name=material]");
    const scaling = root.querySelector("[name=scaling]");
    const hand = root.querySelector("[name=hand]");
    const output = root.querySelector("[data-result]");
    const calculate = () => {
      const result = (Number(raw.value) || 0) * Number(material.value) * Number(scaling.value) * Number(hand.value);
      output.innerHTML = `Effective contribution: <strong>${result.toFixed(2)}</strong> ` +
        `<small>(raw × material × stat scaling × hand efficiency)</small>`;
    };
    root.querySelector("button").addEventListener("click", calculate);
    [raw, material, scaling, hand].forEach(el => el.addEventListener("change", calculate));
    calculate();
  });
});

