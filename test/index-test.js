'use strict';

describe('objects', () => {
  // jsdom({
  //   src: fs.readFileSync(path.resolve(__dirname, '..', 'objects.js'), 'utf-8')
  // })
  
  it('defines an object called `tanniesRecipe`', () => {
    expect(typeof tanniesRecipe).toEqual('object')
    expect(Object.keys(tanniesRecipe).length).toBeGreaterThan(0)
  })
  
  describe('object `tanniesRecipe` has correct keys', () => {
    it('has keys for sugar, butter, eggs, walnuts, and secret ingredients', () => {
      expect(Object.keys(tanniesRecipe))
        .toInclude("sugar")
        .toInclude("butter")
        .toInclude("walnuts")
        .toInclude("secretIngredient1")
        .toInclude("secretIngredient2")
        .toInclude("secretIngredient3")
    })
    
    it('has a nested object called bakingInstructions with right keys', () => {
      expect(Object.keys(tanniesRecipe)).toInclude("bakingInstructions");
      expect(typeof tanniesRecipe.bakingInstructions).toEqual('object')
      expect(Object.keys(tanniesRecipe.bakingInstructions))
        .toInclude("step1")
        .toInclude("step2")
        .toInclude("step3")
        .toInclude("step4")
        .toInclude("step5")
        .toInclude("step6")        
    })
  })
  
  it('defines an object called `playlist`', () => {
    expect(typeof playlist).toEqual('object')
    expect(Object.keys(playlist).length).toBeGreaterThan(0)
  })  

  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      expect(updatePlaylist({}, 'Phil Ochs', "Here's to the State of Mississippi")).
        toEqual({ 'Phil Ochs': "Here's to the State of Mississippi" })
    })
  })

  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      expect(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")).
        toEqual({})
    })
  })
})
