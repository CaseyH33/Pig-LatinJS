describe('pigLatin', function() {
  it("adds ay to the end of a word starting with a vowel", function() {
    expect(pigLatin("island")).to.equal("islanday");
  });

  it("adds ay to the end of a word after shifting the first consonant to the end of the word", function() {
    expect(pigLatin("Football")).to.equal("ootballFay");
  });

  it("adds ay to the end of a word after shifting multiple consonants to the end of the word", function() {
    expect(pigLatin("string")).to.equal("ingstray");
  });

  it("adds ay to the end of a word after shifting qu together to the end of a word", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it("correctly translates two words into pig latin", function() {
    expect(pigLatin("pig latin")).to.equal("igpay atinlay");
  });

  it("correctly translates a full sentence into pig latin", function() {
    expect(pigLatin("This is a phrase in Pig Latin")).to.equal("isThay isay aay asephray inay igPay atinLay");
  });

  it("correctly deals with y in the word", function() {
    expect(pigLatin("yellow")).to.equal("ellowyay");
  });

  it("correctly deals with y in the word", function() {
    expect(pigLatin("synergy")).to.equal("ynergysay");
  });

  it("correctly deals with y in the word", function() {
    expect(pigLatin("style")).to.equal("ylestay");
  });

});
