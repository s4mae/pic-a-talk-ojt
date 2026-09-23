describe("Pic-A-Talk Header Test Cases", () => {

  beforeEach(() => {
    cy.visit("/sparkle/")
  })

  // ============================================================
  // TEST CASE 1 - LOGO
  // ============================================================

  it("Verify logo is displayed", () => {
    cy.get(".et_pb_menu__logo")
      .should("be.visible")
  })


  // ============================================================
  // TEST CASE 2 - HEADER NAVIGATION
  // ============================================================

  it("Verify menu redirects to corresponding pages", () => {
    const pages = [
      { name: "SPARKLE", url: "/sparkle/" },
      { name: "About", url: "/about-us/" },
      { name: "Blog", url: "/blog/" },
      { name: "Contact", url: "/contact-us/" }
    ]

    pages.forEach((page) => {
      cy.visit("/sparkle/")

      cy.get("nav.et-menu-nav a")
        .contains(page.name)
        .should("be.visible")
        .click()

      cy.url()
        .should("include", page.url)
    })
  })

})