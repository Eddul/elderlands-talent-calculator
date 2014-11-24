var warrior = [
	// Defender
	[
		{
			index: 1,
			name: "Anticipation",
			desc: "Increases Dodge by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 2,
			name: "Intimidation",
			desc: "Increases threat to targets by #%.",
			type: "passive",
			ranks: 4,
			primary: [2, 4, 6, 8],
		},
		{
			index: 3,
			name: "Shield Experience",
			desc: "Increases all armor by #% while equipping a shield.",
			type: "passive",
			ranks: 2,
			primary: [5, 10],
		},
		{
			index: 4,
			name: "Improved Slash",
			desc: "Increases the critical strike chance of Slash by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 5,
			name: "Taunt",
			desc: "Teaches the warrior ability 'Taunt'. Taunt causes an enemy target to attack the warrior.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 7,
			name: "Endurance",
			desc: "Increases health by #%.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 8,
			name: "Accuracy",
			desc: "Increases chance to hit by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 9,
			name: "Improved Block",
			desc: "Increases chance of blocking with a shield by #%.",
			type: "passive",
			parent: 3,
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 10,
			name: "Magic Ward",
			desc: "Reduces magic damage taken #%.",
			type: "passive",
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 11,
			name: "Ground Smash",
			desc: "Teaches the warrior ability 'Ground Smash'. Ground Smash will stun all enemies within # tiles and inflict them with physical damage.",
			type: "spell",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 13,
			name: "Revitalize",
			desc: "Increases life steal from physical attacks by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 14,
			name: "Attack Speed",
			desc: "Increases the speed of melee attacks by #%.",
			type: "passive",
			ranks: 4,
			primary: [2, 4, 6, 8],
		},
		{
			index: 16,
			name: "Quick Wits",
			desc: "Reduces the cooldown time of all abilities by #%.",
			type: "passive",
			ranks: 4,
			primary: [2, 4, 6, 8],
		},
		{
			index: 17,
			name: "Greater Armor",
			desc: "Increases effectiveness of armor by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 18,
			name: "Shield Throw",
			desc: "Teaches the warrior 'Shield Throw' ability. Shield Throw launches the warrior's shield at a primary target. The shield will then strike # additional nearby targets.",
			type: "spell",
			parent: 9,
			ranks: 1,
			primary: [2],
		},
		{
			index: 20,
			name: "Undying Rage",
			desc: "Teaches the warrior the 'Undying Rage' ability. This ability makes the warrior unkillable for 10 seconds. In addition the warrior gains #% attack speed and cooldown reduction.",
			type: "Spell",
			ranks: 1,
			primary: [200],
		},
	],

	// Berserker
	[
		{
			index: 1,
			name: "Vitality",
			desc: "Increases health Regeneration by # points every 3 seconds when out of combat.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 2,
			name: "On the Hunt",
			desc: "Increases chance to hit by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 4,
			name: "Penetration",
			desc: "Ignores # of the target's armor.",
			type: "passive",
			ranks: 5,
			primary: [50, 100, 150, 200, 250],
		},
		{
			index: 5,
			name: "Disembowel",
			desc: "Teaches the warrior ability 'Disembowel'. This ability causes the target to bleed over time.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
            // TODO: Ranks on this is fucked
			index: 6,
			name: "Way of the Blade",
			desc: "Increases attack speed while holding two One-Handed weapons by #%.",
			type: "passive",
			ranks: 1,
			//primary: [3, 6, 9, 12, 15],
            primary: [15],
		},
		{
			index: 7,
			name: "Beastly Focus",
			desc: "Reduces cooldown reduction of attacks by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 8,
			name: "Brutal Rage",
			desc: "When hitting a target in combat there is a #% chance to slow the target.",
			type: "passive",
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 10,
			name: "Warrior's Strike",
			desc: "Teaches the ability 'Warrior's Strike'.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 11,
			name: "Accuracy",
			desc: "Increases chance to hit by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 12,
			name: "Ambidexterity",
			desc: "Improves damage with off-hand weapons by #%.",
			type: "passive",
			parent: 6,
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 13,
			name: "Frenzy",
			desc: "Every time an enemy is killed the warrior regains #% base health, attack speed is increased by 20% and cooldown are reduced by 10% for 10 seconds.",
			type: "passive",
			ranks: 4,
			primary: [5, 10, 15, 20],
		},
		{
			index: 14,
			name: "Devastating Strike",
			desc: "Increases the critical strike chance of melee weapons by #%.",
			type: "passive",
			ranks: 5,
			primary: [3, 6, 9, 12, 15],
		},
		{
			index: 15,
			name: "Whirlwind",
			desc: "Teaches the warrior ability 'Whirlwind'. Whirlwind damages all enemies around the warrior slowing enemy attack speed for 5 seconds.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 16,
			name: "Cooldown Reduction",
			desc: "Reduces the cooldown time of all abilities by #%.",
			type: "passive",
			ranks: 4,
			primary: [2, 4, 6, 8],
		},
		{
			index: 17,
			name: "Critical Shock",
			desc: "#% chance to stun target for 5 seconds when critically hit.",
			type: "passive",
			parent: 14,
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 18,
			name: "Deadly Vortex",
			desc: "Targets hit with Whirlwind have a #% chance of being inflicted with a bleed effect for 10 seconds.",
			type: "passive",
			parent: 15,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 20,
			name: "Death Blow",
			desc: "Increases critical damage by 200% and automatically deals a critical strike when hitting a target below 30%. Lasts 30 seconds.",
			type: "spell",
			parent: 17,
			ranks: 1,
			primary: [],
		},
	],
	[
		{
			index: 1,
			name: "Rejuvenation",
			desc: "Increases mana regeneration by # every 3 seconds when out of combat.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 2,
			name: "Parry",
			desc: "Increases Dodge by #%.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 3,
			name: "Battle Sense",
			desc: "Increases chance to hit humanoid target while using a Two-Handed weapon by #%.",
			type: "passive",
			ranks: 4,
			primary: [5, 10, 15, 20],
		},
		{
			index: 4,
			name: "Cleave",
			desc: "Teaches the warrior spell 'Cleve'. Cleve strikes the current target and two adjacent targets.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 5,
			name: "Internal Injury",
			desc: "When critically striking an enemy in combat there is a #% chance to apply a DoT.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 7,
			name: "Crushing Blow",
			desc: "Cleve attacks have a #% chance to stun the target for 3 seconds.",
			type: "passive",
			parent: 4,
			ranks: 2,
			primary: [4, 8],
		},
		{
			index: 8,
			name: "Quickness",
			desc: "Increases attack speed by #%.",
			type: "passive",
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 9,
			name: "Two Handed Expertise",
			desc: "Increases damage with Two-Handed weapons by #%.",
			type: "passive",
			ranks: 4,
			primary: [5, 10, 15, 20],
		},
		{
			index: 11,
			name: "Battle Charge",
			desc: "Teaches the warrior ability 'Battle Charge'. Battle Charge allows the warrior to rush to a target.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 12,
			name: "Brutal Punishment",
			desc: "Increases critical strike damage by #% with Two-Handed weapons.",
			type: "passive",
			parent: 9,
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 13,
			name: "Thundering Might",
			desc: "Gives a #% chance, when hitting a target, to reset the cooldown of the Cleave ability.",
			type: "passive",
			parent: 7,
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 14,
			name: "Will to Live",
			desc: "When struck in combat there is a #% chance to increase life steal by 20% for 10 seconds.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 15,
			name: "Explosive Rage",
			desc: "Teaches the warrior ability 'Explosive Rage'. Explosive Rage blasts all nearby enemies away from the warrior. All enemies thrown are slowed for 5 seconds.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 16,
			name: "Armor Penetration",
			desc: "Increases armor penetration by #.",
			type: "passive",
			ranks: 4,
			primary: [40, 80, 120, 160],
		},
		{
			index: 17,
			name: "Retaliation",
			desc: "When hit while in combat the warrior has a #% chance to reset the cooldown of the Explosive Rage and Slash abilities.",
			type: "passive",
			parent: 14,
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 18,
			name: "Slippery Step",
			desc: "When struck in combat there is a #% chance to slip out of any form of crowd control.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 20,
			name: "Domination",
			desc: "Teaches the warrior mastery ability of 'Dominiation'.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
	]
];

var mage = [
	// Pyromancer
	[
		{
			index: 1,
			name: "Direct Fire",
			desc: "Increases the accuracy of spells by #%.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 2,
			name: "Stat: Mana",
			desc: "Increases base mana pool by #%.",
			type: "passive",
			ranks: 5,
			primary: [6, 12, 18, 24, 30],
		},
		{
			index: 3,
			name: "Fireball",
			desc: "Teaches the mage spell 'Fireball'. Launches a large fireball at the target inflicting fire damage.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 4,
			name: "Burning Intensity",
			desc: "Increases damage with fire spells by #% not including periodic fire damage.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 5,
			name: "Blazing Speed",
			desc: "Increases casting speed of spells by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 6,
			name: "Sudden Fire",
			desc: "When Fireball critically hits a target there is a #% chance that your Fireball spell will be reset and instant cast.",
			type: "passive",
			parent: 3,
			ranks: 4,
			primary: [20, 40, 60, 80],
		},
		{
			index: 7,
			name: "Flame Blast",
			desc: "Teaches the mage spell 'Flame Blast'. Ignites an enemy target causing fire damage over time.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 8,
			name: "Heated Flame",
			desc: "Increases critical strike fire spells by #%.",
			type: "passive",
			ranks: 4,
			primary: [5, 10, 15, 20],
		},
		{
			index: 9,
			name: "Pyromastery",
			desc: "Reduces cooldowns by #%.",
			type: "passive",
			ranks: 5,
			primary: [3, 6, 9, 12, 15],
		},
		{
			index: 10,
			name: "Explosive Touch",
			desc: "Teaches the mage spell 'Explosive Touch'. This spell inflicts the target with an explosive aura of fire which burns the target for 10 seconds. After that time the aura explodes dealing fire damage to the target and all nearby targets.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 11,
			name: "Spreading Flame",
			desc: "When a target is critically hit by fire spells there is a #% chance to cause the target to burst into flames, inflicting fire damage for 12 seconds.",
			type: "passive",
			parent: 8,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 12,
			name: "Explosion",
			desc: "Teaches the mage spell 'Explosion'. This spell inflicts damage to the target and all nearby enemies.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 13,
			name: "Heated Mana",
			desc: "Killing a target with Explosive Touch will return #% of mana.",
			type: "passive",
			parent: 10,
			ranks: 5,
			primary: [2, 4, 6, 8,  10],
		},
		{
			index: 14,
			name: "Hot Streak",
			desc: "Landing two critical strikes in a row with fire spells has a #% chance to reset the cooldowns on all fire spells.",
			type: "passive",
			parent: 11,
			ranks: 5,
			primary: [20, 40, 60, 80, 100],
		},
		{
			index: 16,
			name: "The Final Touch",
			desc: "Increases the explosion damage of Explosive Touch by #%.",
			type: "passive",
			parent: 13,
			ranks: 5,
			primary: [20, 40, 60, 80, 100],
		},
		{
			index: 18,
			name: "Blast Radius",
			desc: "Increases the range of Explosion to # tiles away.",
			type: "passive",
			parent: 12,
			ranks: 3,
			primary: [2, 3, 4],
		},
		{
			index: 20,
			name: "Combustion",
			desc: "Teaches the mage spell 'Combustion'. The caster becomes a flaming ball of fire causing damage to all enemies around for 15 seconds and reduces damage taken by 50%.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
	],

	// Frost Mage
	[
		{
			index: 1,
			name: "Revjuvenation",
			desc: "Increases mana regeneration by #%.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 2,
			name: "Frostbolt",
			desc: "Teaches the mage spell 'Frostbolt'. This spell launches a frozen projectile at the target inflicting frost damage and slowing the target by 40% for 3 seconds.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 3,
			name: "Cold Health",
			desc: "Spell damage heals the caster by #%.",
			type: "passive",
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 4,
			name: "Frost Nip",
			desc: "When a target is hit with a frost spell they will receive Frost Nip. This slows their attack and cast speeds by #% for 5 seconds.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 5,
			name: "Deep Freeze",
			desc: "Increases damage with Frostbolt by #%.",
			type: "passive",
			parent: 2,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 7,
			name: "Frost Bite",
			desc: "When a target is hit with a frost spell while Frost Nip is active, the spell has a #% chance of being a critical hit.",
			type: "passive",
			parent: 4,
			ranks: 5,
			primary: [20, 40, 60, 80, 100],
		},
		{
			index: 8,
			name: "Cold Front",
			desc: "Increases the cast speed of Frostbolt by #%.",
			type: "passive",
			parent: 5,
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 9,
			name: "Frost Nova",
			desc: "Teaches the mage spell 'Frost Nova'. This spell will trap all nearby enemies in ice for 6 seconds.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 11,
			name: "Improved Frostbolt",
			desc: "Increases the critical strike chance of Frostbolt by #%.",
			type: "passive",
			parent: 8,
			ranks: 4,
			primary: [2, 4, 6, 8],
		},
		{
			index: 13,
			name: "Frost Devastation",
			desc: "Increases the duration of Frost Nip by # seconds.",
			type: "passive",
			parent: 7,
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 14,
			name: "Arctic Blast",
			desc: "Teaches the mage spell 'Arctic Blast'. This spell hits all enemies next to the target with frost damage.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 15,
			name: "Improved Frost Nova",
			desc: "When hit with Frost Nova, targets have a #% chance to be hit with a big chill which inflicts frost damage for 10 seconds.",
			type: "passive",
			parent: 9,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 16,
			name: "Critical Chill",
			desc: "Increases the critical strike chance of frost spells by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 17,
			name: "Improved Arctic Blast",
			desc: "Adds a #% chance that Arctic Blast will freeze a target in place for 5 seconds.",
			type: "passive",
			parent: 14,
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 18,
			name: "Frozen Shield",
			desc: "Teaches the mage spell 'Frozen Shield'. This shield increases armor of the mage by 50%. When struck, attackers will have a chance to have movement and combat speeds slowed for 3 seconds.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 20,
			name: "Shroud of Ice",
			desc: "Teaches the mage spell 'Shroud of Ice'. This spell encases the mage in a block of ice, reducing damage taken by 95% for 10 seconds. The shroud absorbs all incoming damage and after the duration it will explode distributing that damage to all nearby enemies.",
			type: "spell",
			ranks: 1,
			primary: [],
		},

	],

	// Stormbringer
	[
		{
			index: 1,
			name: "Power Jolt",
			desc: "Increases spell power by #%.",
			type: "passive",
			ranks: 4,
			primary: [10, 20, 30, 40],
		},
		{
			index: 2,
			name: "Lightning Strike",
			desc: "Teaches the mage spell 'Lightning Strike'. This spell launches a bolt of electricity at a target dealing electric damage.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 3,
			name: "Critical Charge",
			desc: "Increases spell critical strike by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 4,
			name: "Extreme Conduction",
			desc: "Ignore #% of targets magical resistance.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 5,
			name: "Multiple Strike",
			desc: "Lightning Strike will hit # additional targets near the original target.",
			type: "passive",
			parent: 2,
			ranks: 3,
			primary: [1, 2, 3],
		},
		{
			index: 6,
			name: "Hurricane",
			desc: "Teaches the mage spell 'Hurricane'. This spell pushes all enemies away from the caster.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 7,
			name: "Storm Elemental",
			desc: "Teaches the mage spell 'Storm Elemental'. This spell summons a storm elemental next to the mage. The elemental has one health point and will attack the mage's primary target. The elemental lasts for 30 seconds before vanishing.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 8,
			name: "Electrical Burst",
			desc: "Increases the chance for Lightning Strike to critically hit to #%.",
			type: "passive",
			parent: 5,
			ranks: 5,
			primary: [4, 8, 12, 16, 20],
		},
		{
			index: 10,
			name: "Elemental Endurance",
			desc: "Increases the duration of the elemental by # seconds.",
			type: "passive",
			parent: 7,
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 11,
			name: "Static Charge",
			desc: "Teaches the mage spell 'Static Charge'. This spell charges an enemy target where they begin to discharge electric damage to all enemy units nearby for 10 seconds.",
			type: "passive",
			ranks: 1,
			primary: [],
		},
		{
			index: 12,
			name: "Deadly Winds",
			desc: "Increases the distances that enemies are thrown with Hurricane.",
			type: "passive",
			parent: 6,
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 14,
			name: "Increased Voltage",
			desc: "Increases the duration of Static Charge by # seconds.",
			type: "passive",
			parent: 11,
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 15,
			name: "Stormy Condition",
			desc: "Reduces the cooldown of Hurricane by #%.",
			type: "passive",
			parent: 12,
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 16,
			name: "Elemental Rage",
			desc: "Increases the power of the elemental's attacks by #%.",
			type: "passive",
			parent: 10,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 17,
			name: "Greater Discharge",
			desc: "Improves the damage of Static Discharge by #%.",
			type: "passive",
			parent: 14,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 18,
			name: "Induced Energy",
			desc: "Restores mana when a target is critically hit with spell damage. This does not include periodic damage.",
			type: "passive",
			ranks: 1,
			primary: [],
		},
		{
			index: 20,
			name: "Perfect Storm",
			desc: "Teaches the mage spell 'Perfect Storm'. This spell Transforms the caster into a Twister increasing movement speed and launching enemy units away from the twister. no spells can be cast and the caster cannor be attack",
			type: "spell",
			ranks: 1,
			primary: [],
		},
	]
]

var priest = [
	// Divine Healer
	[
		{
			index: 1,
			name: "Enlightenment",
			desc: "Increases max mana by #%.",
			type: "passive",
			ranks: 5,
			primary: [6, 12, 18, 24, 30],
		},
		{
			index: 2,
			name: "Faith",
			desc: "Increases Heal Power by #%.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 3,
			name: "Divine Shield",
			desc: "Teaches the cleric spell 'Divine Shield' - Place a protective shield on a friendly target, absorbing damage for # seconds.",
			type: "spell",
			ranks: 1,
			primary: [10],
		},
		{
			index: 4,
			name: "Improved Holy Strike",
			desc: "Increases damage inflicted by Holy Strike by #%.",
			type: "passive",
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 5,
			name: "Heal",
			desc: "Teaches the cleric spell 'Heal'. This spell is cast upon a friendly target and heals them.",
			type: "spell",
			ranks: 1,
			primary: [], //??
		},
		{
			index: 7,
			name: "Holy Repentance",
			desc: "Holy strike slows the target by #% for 3 seconds.",
			type: "passive",
			parent: 4,
			ranks: 4,
			primary: [10, 20, 30, 40],
		},
		{
			index: 8,
			name: "Focused Mending",
			desc: "Increaases the speed of casting Heal by #%.",
			type: "passive",
			parent: 5,
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 9,
			name: "Spiritual Guard",
			desc: "Increases the amount of damage the shield can absorb by #%.",
			type: "passive",
			parent: 3,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 10,
			name: "Divine Touch",
			desc: "Teaches the cleric spell 'Divine Touch' - Heal a friendly target over # seconds.",
			type: "spell",
			ranks: 1,
			primary: [10],
		},
		{
			index: 11,
			name: "Renewal",
			desc: "When Heal critically hits the target the target receives Renewal, healing them over # seconds.",
			type: "passive",
			parent: 8,
			ranks: 1,
			primary: [3],
		},
		{
			index: 13,
			name: "Improved Divine Touch",
			desc: "Increase the duration of Divine Touch by #%.",
			type: "passive",
			parent: 10,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 14,
			name: "Life Drain",
			desc: "Teaches the cleric spell 'Life Drain' - Drain life from the target, dealing Holy damage while healing the caster over # seconds.",
			type: "spell",
			ranks: 1,
			primary: [9],
		},
		{
			index: 15,
			name: "Gift of Life",
			desc: "When your Divine Shield ends the target is healed for #% of the absorbed amount.",
			type: "passive",
			parent: 9,
			ranks: 3,
			primary: [25, 50, 75],
		},
		{
			index: 16,
			name: "Divine Touch Reset",
			desc: "Casting Heal on target with Divine Touch extends the duration of the Divine Touch by # seconds.",
			type: "passive",
			parent: 13,
			ranks: 3,
			primary: [1, 2, 3],
		},
		{
			index: 17,
			name: "Improved Drain",
			desc: "Increases Life Drain's damage by #%. Life Drain has a #% chance to also heal allies protected by Divine Shield.",
			type: "passive",
			parent: 14,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
			secondary: [20, 40, 60, 80, 100],
		},
		{
			index: 18,
			name: "Divine Favor",
			desc: "Increasaes your Spell Crit by #.",
			type: "passive",
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 20,
			name: "Divine Intervention",
			desc: "Teaches the cleric spell 'Divine Intervention' - Bless the target, preventing their death for up to 3 seconds. During this time the target's health cannot drop below 1. Upon Taking damage that otherwise be fatal, the buff is consumedand the target is granted # seconds of damage immunity.",
			type: "spell",
			ranks: 1,
			primary: [30],
		},
	],

	// holy priest
	[
		{
			index: 1,
			name: "Continued Devotion",
			desc: "Increases Mana Regeneration by #%.",
			type: "passive",
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 2,
			name: "Holy Wave",
			desc: "Teaches the cleric spell 'Holy Wave' - Blasts nearby targets with Holy power, healing allies and damaging enemies.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 3,
			name: "Holy Strength",
			desc: "Increases health by #%.",
			type: "passive",
			ranks: 5,
			primary: [4, 8, 12, 16, 20],
		},
		{
			index: 4,
			name: "Chain Heal",
			desc: "Teaches the cleric spell 'Chain Heal' - Heal the target and up to # other nearby allies.",
			type: "spell",
			ranks: 1,
			primary: [2],
		},
		{
			index: 6,
			name: "Unrelenting",
			desc: "Increases your Cooldown Reduction by #.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 7,
			name: "Improved Chain Heal",
			desc: "Chain Heal has an additional #% chance to critically hit.",
			type: "passive",
			parent: 4,
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 8,
			name: "Improved Holy Wave",
			desc: "Holy Wave has an additional #% chance to critically hit.",
			type: "passive",
			parent: 2,
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 9,
			name: "Holy Prayer",
			desc: "Teaches the cleric spell 'Holy Prayer' - Channel your prayers to heal nearby allies for up to # seconds. You must remain still to channel the spell.",
			type: "spell",
			ranks: 1,
			primary: [8],
		},
		{
			index: 10,
			name: "Holy Reach",
			desc: "Increases the number or additional targets Chain Heal can jump by #.",
			type: "passive",
			parent: 7,
			ranks: 4,
			primary: [1, 2, 3, 4],
		},
		{
			index: 11,
			name: "Holy Blessing",
			desc: "Increases the range of Divine Wave by # tiles.",
			type: "passive",
			parent: 8,
			ranks: 1,
			primary: [2],
		},
		{
			index: 12,
			name: "Improved Holy Prayer",
			desc: "Holy Prayer also restores #% of your maximum Mana per second. Nearby allies gain half the effect.",
			type: "passive",
			parent: 9,
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 13,
			name: "Fervent Blessing",
			desc: "Your critical heals have a #% chance to increase your cooldown reduction by 15.",
			type: "spell",
			ranks: 3,
			primary: [25, 50, 75],
		},
		{
			index: 14,
			name: "Life Spirit",
			desc: "Teaches the cleric spell 'Life Spirit' - Summon a friendly spirit that heals the cleric's allies for up to # seconds.",
			type: "spell",
			ranks: 1,
			primary: [30],
		},
		{
			index: 16,
			name: "Ardent Healer",
			desc: "Your Healing Power is increased by #% while under the effects of Fervent Blessing.",
			type: "passive",
			parent: 13,
			ranks: 3,
			primary: [10, 20, 30],
		},
		{
			index: 17,
			name: "Breath of Life",
			desc: "Every time the Cleric heals an ally with Chain Heal, the life of the Spirit is extended by # seconds.",
			type: "passive",
			parent: 14,
			ranks: 3,
			primary: [1, 2, 3],
		},
		{
			index: 18,
			name: "Devout Prayer",
			desc: "Increases duration Holy Prayer by # seconds.",
			type: "passive",
			parent: 12,
			ranks: 4,
			primary: [1, 2, 3, 4],
		},
		{
			index: 20,
			name: "Will of Tyveria",
			desc: "Teaches the Cleric spell 'Will of Tyveria' - The Cleric can invoke the will of Tyveria to ressurect either themself or their party.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
	],

	// vassal
	[
		{
			index: 1,
			name: "Retribution",
			desc: "Teaches the Cleric spell 'Retribution' - A melee attack that inflicts #% weapon damage on the target in the form of Holy damage. Power for this attack comes form Attack Power.",
			type: "spell",
			ranks: 1,
			primary: [100],
		},
		{
			index: 2,
			name: "Divine Power",
			desc: "Increases Spell Power by #%.",
			type: "passive",
			ranks: 5,
			primary: [2, 4, 6, 8, 10],
		},
		{
			index: 3,
			name: "Absolution",
			desc: "Increases the chance of critical strikes when using spells by #%.",
			type: "passive",
			ranks: 5,
			primary: [1, 2, 3, 4, 5],
		},
		{
			index: 5,
			name: "Divine Strike",
			desc: "Teaches the Cleric spell 'Divine Strike' - A ranged attack that causes an explosion of Holy damage on the target inflicting holy damage to all nearby enemy targets.",
			type: "Spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 6,
			name: "Blessing of the Devout",
			desc: "There is a #% chance that a critical strike will apply the Blessing of the Devout on the caster, healing them over 5 seconds.",
			type: "passive",
			parent: 3,
			ranks: 4,
			primary: [5, 10, 15, 20],
		},
		{
			index: 7,
			name: "Proselytize",
			desc: "Retribution inflicts #% more Holy Damage on targets recently struck by Divine Strike.",
			type: "passive",
			parent: 1,
			ranks: 5,
			primary: [8, 16, 24, 32, 40],
		},
		{
			// ADD THIRD
			index: 8,
			name: "Improved Divine Strike",
			desc: "After striking a target with Retribution, Divine Strike's damage is increased by #% for 5 seconds. Stacks up to 4 times.",
			type: "passive",
			parent: 5,
			ranks: 5,
			primary: [3, 6, 9, 12, 15],
		},
		{
			index: 9,
			name: "Holy Shock",
			desc: "Teaches the Cleric spell 'Holy Shock' - An instant ranged attack that inflicts Holy Damage on enemy targets but heals friendly targets.",
			type: "spell",
			ranks: 1,
			primary: [],
		},
		{
			index: 10,
			name: "Divine Will",
			desc: "Increases Critical strike damage of Retribution by #%.",
			type: "passive",
			parent: 7,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
		},
		{
			index: 11,
			name: "Holy Justice",
			desc: "Increases Holy damage done when using a mace by #%.",
			type: "passive",
			ranks: 5,
			primary: [4, 8, 12, 16, 20],
		},
		{
			index: 13,
			name: "Last Stand",
			desc: "When the Cleric is below 25% health they are empowered by Last Stand, making all attacks critical and increasing critical damage by #% for 5 seconds. This passive has a 60 second cooldown.",
			type: "passive",
			ranks: 5,
			primary: [20, 40, 60, 80, 100],
		},
		{
			index: 14,
			name: "Salvation",
			desc: "Teaches the Cleric spell 'Salvation' - Applies a buff on the cleric that reflects #% of the damage taken back to the attacker as Holy damage. Targets hit by this damage are slowed. Lasts 25 seconds.",
			type: "spell",
			ranks: 1,
			primary: [25],
		},
		{
			index: 15,
			name: "Improved Holy Shock",
			desc: "Healing a target with Holy Shock increases the Critical chance of your next Retribution by #%. Damaging a target with Holy Shock causes your next Retribution to heal you for #% of the damage done.",
			type: "passive",
			parent: 9,
			ranks: 5,
			primary: [10, 20, 30, 40, 50],
			secondary: [8, 16, 24, 32, 40],
		},
		{
			index: 16,
			name: "Punishment",
			desc: "Your offensive Holy spells shackle your targets with ethereal chains, slowing them by #% for 5 seconds. Stacks up to 5 times.",
			type: "passive",
			ranks: 4,
			primary: [3, 6, 9, 12],
		},
		{
			index: 17,
			name: "Improved Salvation",
			desc: "The Cleric is healed by an amount equal to #% of the damage reflected by Salvation.",
			type: "passive",
			parent: 14,
			ranks: 5,
			primary: [30, 60, 90, 120, 150],
		},
		{
			index: 18,
			name: "Aftershocks",
			desc: "There is a #% chance that Holy Shock will induce Aftershocks. Aftershocks inflicts Holy damage over time to enemy targets while healing friendly targets over time.",
			type: "passive",
			parent: 15,
			ranks: 5,
			primary: [5, 10, 15, 20, 25],
		},
		{
			index: 20,
			name: "Vengeance",
			desc: "Teaches the Cleric spell 'Vengeance' - Apply Vengeance on the target and teleport to target's location. Vengeance lasts 3 seconds and the target is slowed. When Vengeance expires the targets takes #% of the damage taken while the Vengeance debuff was active.",
			type: "spell",
			ranks: 1,
			primary: [150],
		},

	]
];