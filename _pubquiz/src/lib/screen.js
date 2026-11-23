// Optional projector screen: the order of slides for a quiz night.
import { sectionsOf } from "./calc.js";

// Questions are grouped by section: a round's themes (or the round itself if it has none).
// Slide keys: "welcome", "title:<sectionId>", "q:<sectionId>:<i>", "answers:<sectionId>", "a:<sectionId>:<i>",
// "break", "reveal", "season", "blank". The live state is { weekId, k, shown } where `shown`
// counts how many teams the results reveal has shown so far (from last place up).

export function slidePlan(week, questions) {
  const cats = sectionsOf(week?.categories);
  const qs = c => questions?.cats?.[c.id] || [];
  const plan = [{ k: "welcome", label: "Welcome + QR code", group: "Start" }];
  for (const c of cats) {
    plan.push({ k: "title:" + c.id, label: c.name, group: "Questions", cat: c });
    qs(c).forEach((q, i) => plan.push({ k: `q:${c.id}:${i}`, label: `${c.name} · question ${i + 1}`, group: "Questions", cat: c, i }));
  }
  for (const c of cats) {
    if (!qs(c).length) continue;
    plan.push({ k: "answers:" + c.id, label: "Answers: " + c.name, group: "Answers", cat: c });
    qs(c).forEach((q, i) => plan.push({ k: `a:${c.id}:${i}`, label: `${c.name} · answer ${i + 1}`, group: "Answers", cat: c, i }));
  }
  plan.push({ k: "reveal", label: "Results reveal", group: "End" });
  plan.push({ k: "season", label: "Season table", group: "End" });
  return plan;
}

// Everything a slide key refers to
export function parseKey(k, week, questions) {
  const [type, catId, idx] = String(k || "blank").split(":");
  const cat = sectionsOf(week?.categories).find(c => c.id === catId) || null;
  const list = cat ? questions?.cats?.[cat.id] || [] : [];
  const i = idx != null ? Number(idx) : null;
  return { type, cat, i, total: list.length, item: i != null ? list[i] || null : null };
}

// Next / previous state. In the reveal, each step shows one more team before moving on.
export function step(state, dir, plan, teamCount) {
  const k = state.k || "welcome";
  const shown = state.shown || 0;
  if (k === "reveal") {
    if (dir > 0 && shown < teamCount) return { ...state, shown: shown + 1 };
    if (dir < 0 && shown > 0) return { ...state, shown: shown - 1 };
  }
  const at = plan.findIndex(p => p.k === k);
  const next = plan[Math.max(0, Math.min(plan.length - 1, (at < 0 ? 0 : at) + dir))];
  // Going back into the reveal shows it complete; going forward into it starts from nothing
  return { ...state, k: next.k, shown: next.k === "reveal" && dir < 0 ? teamCount : 0 };
}
