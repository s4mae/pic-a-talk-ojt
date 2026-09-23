describe("Pic-A-Talk About Us Page Test Cases", () => {

  beforeEach(() => {
    cy.visit("/about-us/")
  })


  // ============================================================
  // TEST CASE 1 - ABOUT US PAGE
  // ============================================================

  it("Verify About Us page loads successfully", () => {
    cy.url()
      .should("include", "/about-us/")

    cy.get("h1")
      .should("contain", "The Story of Pic-A-Talk")
  })


  // ============================================================
  // TEST CASE 2 - ABOUT PAGE CONTENT
  // ============================================================

  it("Verify Team, Mission, and Vision sections are displayed", () => {
    cy.contains("h2", "Our Team")
      .should("be.visible")

    cy.contains("h2", "Our Mission")
      .should("be.visible")

    cy.contains("h2", "Our Vision")
      .should("be.visible")

    cy.get("body")
      .should("contain", "CEO, Co-Founder")
      .and("contain", "CTO, Co-Founder")
  })

})