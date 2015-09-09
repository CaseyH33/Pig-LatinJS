describe('pigLatin', function() {
  it("adds ay to the end of a word starting with a vowel", function() {
    expect(pigLatin("island")).to.equal("islanday");
  });

  it("adds ay to the end of a word after shifting the first consonant to the end of the word", function() {
    expect(pigLatin("football")).to.equal("ootballfay");
  });
});
