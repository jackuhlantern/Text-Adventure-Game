console.log("You are a BRAVE TRAVELLER who has defeated COUNTLESS ENEMIES. Many a legend speaks of you.");
var name = prompt("...What was your name again?").toUpperCase();
console.log("Yes, that's right! " + name + "!");
console.log("Many a legend speaks of " + name + ", the legendary...");
var classType = prompt("I think it was...HERO? ROGUE? No, no, wait, SPELLCASTER.").toUpperCase();

while (var undecided) {
	switch (classType) {
		case 'HERO':
			return "Ah, yes! The legendary HERO. You are on a path of JUSTICE.";
			undecided = false;
		case 'ROGUE':
			return "Of course! None could forget a legendary ROGUE. You scoundrel! Scheming and sneaking for RICHES and ULTERIOR MOTIVES.";
			undecided = false;
		case 'SPELLCASTER':
			return "Ha! Indeed. The legendary SPELLCASTER. Are any as wise as you? Someday soon you will perfect your DIVINE ARTS.";
			undecided = false;
		default:
			return "Okay, yeah, I was just trying to prompt you to pick a class, so please select HERO, ROGUE, or SPELLCASTER. Try again.";
	}
}