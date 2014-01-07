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

	GDT.loadJs(['mods/GDT-EvenMoreEvents-0.1.1/helpers/checks.js',
	'mods/GDT-EvenMoreEvents-0.1.1/api/persistence.js',
	'mods/GDT-EvenMoreEvents-0.1.1/api/events.js',
	'mods/GDT-EvenMoreEvents-0.1.1/api/platforms.js',
	'mods/GDT-EvenMoreEvents-0.1.1/api/topics.js',
	'mods/GDT-EvenMoreEvents-0.1.1/api/research.js',
	'mods/GDT-EvenMoreEvents-0.1.1/src/emegdt.js'
	], ready, error);
})();
