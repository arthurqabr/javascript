describe("demo", function () {
it("tests demo", function (browser) {
  browser.windowRect({width: 1440, height: 495})
  .navigateTo("https://coffee-cart.netlify.app/")
  .click("[data-test=Espresso]")
  .click("[data-test=Espresso_Macchiato]")
  .click("[data-test=Flat_White]")
  .click("[data-test=Espresso_Con\\ Panna]")
  .click("#app > ul > li:nth-child(2)")
  .click("#app > ul > li:nth-child(2) > a")
  .click("[data-test=checkout]")
  .click("#name")
  .perform(function() {
          const actions = this.actions({async: true});

          return actions
          .keyDown(this.Keys.SHIFT);
        })
  .setValue("#name", "A")
  .perform(function() {
          const actions = this.actions({async: true});

          return actions
          .keyUp(this.Keys.SHIFT);
        })
  .setValue("#name", "Arthur")
  .perform(function() {
          const actions = this.actions({async: true});

          return actions
          .keyDown(this.Keys.TAB);
        })
  .perform(function() {
          const actions = this.actions({async: true});

          return actions
          .keyUp(this.Keys.TAB);
        })
  .perform(function() {
          const actions = this.actions({async: true});

          return actions
          .keyDown(this.Keys.SHIFT);
        })
  .setValue("#email", "C")
  .perform(function() {
          const actions = this.actions({async: true});

          return actions
          .keyUp(this.Keys.SHIFT);
        })
  .setValue("#email", "arthur.o.carvalho")
  .perform(function() {
          const actions = this.actions({async: true});

          return actions
          .keyDown(this.Keys.SHIFT);
        })
  .setValue("#email", "arthur.o.carvalho@")
  .perform(function() {
          const actions = this.actions({async: true});

          return actions
          .keyUp(this.Keys.SHIFT);
        })
  .setValue("#email", "arthur.o.carvalho@gmail.com")
  .click("#promotion")
  .click("#submit-payment")
  .end();
  });
});
