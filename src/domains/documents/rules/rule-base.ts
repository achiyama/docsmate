import type { Language } from "~domains/languages/language";

export interface RuleBase {
  language: Language;

  isSame(language: Language): void;
}
