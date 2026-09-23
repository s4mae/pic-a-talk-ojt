describe("Pic-A-Talk SPARKLE Page Test Cases", () => {

  beforeEach(() => {
    cy.visit("/sparkle/")
  })


  // ============================================================
  // TEST CASE 1 - SPARKLE PAGE
  // ============================================================

  it("Verify SPARKLE page loads successfully", () => {
    cy.url()
      .should("include", "/sparkle/")
  })


  // ============================================================
  // TEST CASE 2 - PROGRAM TIMELINE
  // ============================================================

  it("Verify SPARKLE Program Timeline is displayed", () => {
    cy.get("h1")
      .should("contain", "Program Timeline")

    cy.get("h3")
      .should("contain", "Applications Open")
      .and("contain", "Selected Centers Notified")
      .and("contain", "AAC Assessment")
      .and("contain", "Selected Students Confirmed")
      .and("contain", "Online Graduation")
  })


  // ============================================================
  // TEST CASE 3 - APPLY NOW
  // ============================================================

  it("Verify Apply Now button has a valid application link", () => {
    cy.get("a")
      .contains("Apply Now!")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "forms.gle")
  })

})