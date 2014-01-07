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

	GDT.loadJs(['mods/EMEGDT/helpers/checks.js',
	'mods/EMEGDT/api/persistence.js',
	'mods/EMEGDT/api/events.js',
	'mods/EMEGDT/api/platforms.js',
	'mods/EMEGDT/api/topics.js',
	'mods/EMEGDT/api/research.js',
	'mods/EMEGDT/src/emegdt.js'
	], ready, error);
})();