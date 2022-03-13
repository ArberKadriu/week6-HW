const expect = chai.expect;

describe('Deck', function() {
    it('should contain 52 cards', function() {
        const deck = new Deck();
		deck.createDeck();
		expect(deck.cards).to.have.lengthOf(52)	
    })
})