(() => {
  const xpForLevel = level => Math.round(100 + 30 * level + 5 * level * level);
  const formatNumber = value => value.toLocaleString("en-US");

  const setResult = (output, message, state = "ready") => {
    output.dataset.state = state;
    output.innerHTML = message;
  };

  const setupXpCalculator = root => {
    if (root.dataset.calculatorReady === "true") return;
    root.dataset.calculatorReady = "true";

    const current = root.querySelector("[name=current_level]");
    const currentXp = root.querySelector("[name=current_xp]");
    const target = root.querySelector("[name=target_level]");
    const core = root.querySelector("[name=core_xp]");
    const output = root.querySelector("[data-result]");
    const button = root.querySelector("button");

    const calculate = () => {
      const rawFrom = Number(current.value);
      const rawProgress = Number(currentXp.value);
      const rawTarget = Number(target.value);
      const perCore = Number(core.value);

      if (![rawFrom, rawProgress, rawTarget, perCore].every(Number.isFinite)) {
        setResult(output, "Enter a number in every field.", "error");
        return;
      }

      const from = Math.trunc(rawFrom);
      const progress = Math.trunc(rawProgress);
      const to = Math.trunc(rawTarget);

      if (from < 0 || from > 24 || to < 0 || to > 24 || progress < 0) {
        setResult(output, "Levels must be between 0 and 24, and stored EXP cannot be negative.", "error");
        return;
      }
      if (to <= from) {
        setResult(output, "Choose a target level higher than the current level.", "error");
        return;
      }

      let needed = -progress;
      for (let level = from + 1; level <= to; level += 1) {
        needed += xpForLevel(level);
      }
      needed = Math.max(0, needed);

      const count = Math.ceil(needed / perCore);
      const supplied = count * perCore;
      const overflow = Math.max(0, supplied - needed);
      const coreName = core.options[core.selectedIndex].text.split("·")[0].trim();

      if (needed === 0) {
        setResult(output, `<strong>No additional EXP is required.</strong> The stored EXP already covers level +${to}.`, "success");
        return;
      }

      setResult(output,
        `<span class="calculator__answer"><strong>${formatNumber(needed)} EXP</strong> remaining</span>` +
        `<span><strong>${formatNumber(count)} ${coreName} core${count === 1 ? "" : "s"}</strong> required</span>` +
        `<small>${overflow ? `${formatNumber(overflow)} surplus EXP carries forward during this upgrade.` : "The cores exactly cover the remaining EXP."}</small>`,
        "success"
      );
    };

    button.addEventListener("click", calculate);
    [current, currentXp, target, core].forEach(element => {
      element.addEventListener("input", calculate);
      element.addEventListener("change", calculate);
    });
    calculate();
  };

  const setupEffectiveStatCalculator = root => {
    if (root.dataset.calculatorReady === "true") return;
    root.dataset.calculatorReady = "true";

    const raw = root.querySelector("[name=raw]");
    const material = root.querySelector("[name=material]");
    const scaling = root.querySelector("[name=scaling]");
    const hand = root.querySelector("[name=hand]");
    const output = root.querySelector("[data-result]");
    const calculate = () => {
      const result = (Number(raw.value) || 0) * Number(material.value) * Number(scaling.value) * Number(hand.value);
      setResult(output, `Effective contribution: <strong>${result.toFixed(2)}</strong> ` +
        `<small>(raw × material × stat scaling × hand efficiency)</small>`, "success");
    };

    root.querySelector("button").addEventListener("click", calculate);
    [raw, material, scaling, hand].forEach(element => {
      element.addEventListener("input", calculate);
      element.addEventListener("change", calculate);
    });
    calculate();
  };

  const initializeTools = () => {
    document.querySelectorAll("[data-relic-xp-calculator]").forEach(setupXpCalculator);
    document.querySelectorAll("[data-effective-stat-calculator]").forEach(setupEffectiveStatCalculator);
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeTools);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTools, { once: true });
  } else {
    initializeTools();
  }
})();
