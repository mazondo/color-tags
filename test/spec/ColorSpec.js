describe("Colors", function() {

	it("Should let me predictably generate a color", function() {
		var color = colorTag("asdf");
		expect(color.hex()).toEqual(colorTag("asdf").hex());
	});

	it("Should know how to return RGB", function() {
		var color = colorTag("asdf");
		expect(color.hex()).toEqual("34d42d");
		expect(color.rgb()).toEqual({r: 52, g: 212, b: 45});
	});

	it("Should know which readable color to use", function() {
		var color = colorTag("asdf");
		expect(color.readable("#000000", color.hex()).hex()).toEqual("000000");
	});

	it("Should be able to handle close colors for readability", function() {
		var color = colorTag("questions");
		expect(color.hex()).toEqual("4d41c5");
		expect(color.readable("#000000", "#ffffff").hex()).toEqual("ffffff");
	});

});