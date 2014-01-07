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
	};

	var error = function () {
	};

	GDT.loadJs(['mods/GDT-EvenMoreEvents/helpers/checks.js',
	'mods/GDT-EvenMoreEvents/api/persistence.js',
	'mods/GDT-EvenMoreEvents/api/events.js',
	'mods/GDT-EvenMoreEvents/api/platforms.js',
	'mods/GDT-EvenMoreEvents/api/topics.js',
	'mods/GDT-EvenMoreEvents/api/research.js',
	'mods/GDT-EvenMoreEvents/src/emegdt.js'
	], ready, error);
})();