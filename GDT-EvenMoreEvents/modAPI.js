(function () {
	var ready = function () {
		//Añadimos Topics
			EMEGDT.addTopicCityPolitics();
		//Añadimos Platforms

		//Añadimos eventos

		//Añadimos researches
			EMEGDT.addResearchFPS();
			EMEGDT.addResearchTPS();
			EMEGDT.addResearchSandBox();
		//Game Extensions
			EMEGDT.addExtendGame();
	};

	var error = function () {
	};

	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/GDT-EvenMoreEvents-0.1.1/src/emegdt.js'
	], ready, error);
})();
