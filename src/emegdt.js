var EMEGDT = {};
(function () {
	//TOPICS
	EMEGDT.addTopicCityPolitics = function () {
		GDT.addTopics([
		{
			id: "CityPolitics",
			name: "City Politics".localize("game topic"),
			genreWeightings: [.4, .4, .7, 1, 1, .6],
			audienceWeightings: [0.8, 1, 0.8]
		}
		]);
	};

	//PLATFORMS


	//EVENTS


	//RESEARCHES
	EMEGDT.addResearchFPS = function () {
		GDT.addResearchItem(
		{
			id: "FPS", //Must be unique
			name: "First Person Shooter".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 6 //The "Level Design" level has to be at least 6
			},
			category: "Engine",
			categoryDisplayName: "Engine".localize()
		});
	};
	
	EMEGDT.addResearchTPS = function () {
		GDT.addResearchItem(
		{
			id: "TPS", //Must be unique
			name: "Third Person Shooter".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 6 //The "Level Design" level has to be at least 6
			},
			category: "Engine",
			categoryDisplayName: "Engine".localize()
		});
	};
	
	EMEGDT.addResearchSandBox = function () {
		GDT.addResearchItem(
		{
			id: "sandbox", //Must be unique
			name: "SandBox".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 6 //The "Level Design" level has to be at least 6
			},
			category: "Engine",
			categoryDisplayName: "Engine".localize()
		});
	};
	
})();