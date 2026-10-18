// Core types shared by every ruleset. This folder is hand-written.
// These are starting points: reshape them as you learn what each system needs.

export interface StatDef {
	id: string; // e.g. 'str' or 'REF'
	name: string;
	min: number;
	max: number;
}

export interface SkillDef {
	id: string;
	name: string;
	stat: string; // StatDef id this skill is linked to
	description?: string;
}

export interface Character {
	id: string;
	name: string;
	rulesetId: string;
	stats: Record<string, number>;
	skills: Record<string, number>;
	// Carbon 2185 = levels + classes, Cyberpunk RED = roles + IP.
	// Ruleset-specific bits live here until you decide on a shared shape.
	extra: Record<string, unknown>;
}

export interface Ruleset {
	id: string;
	name: string;
	stats: StatDef[];
	skills: SkillDef[];

	// TODO: the rules logic you write by hand, e.g.
	// statModifier(score: number): number;
	// skillCheck(character: Character, skillId: string): RollResult;
	// advance(character: Character, ...): Character;
}
