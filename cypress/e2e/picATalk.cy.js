describe("Pic-A-Talk Website Test Cases", () => {


  // ============================================================
  // TEST CASE 1 - SPARKLE
  // ============================================================

  it("Verify logo is displayed", () => {

    cy.visit("/sparkle/")

    cy.url()
      .should("include", "/sparkle/")

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
        .invoke("text")
        .then((text) => {

          expect(text.trim())
            .to.contain(page.name)

        })

      cy.get("nav.et-menu-nav a")
        .contains(page.name)
        .click()

      cy.url()
        .should("include", page.url)

    })

  })


  // ============================================================
  // TEST CASE 3 - SPARKLE PROGRAM TIMELINE
  // ============================================================

  it("Verify SPARKLE Program Timeline is displayed", () => {

    cy.visit("/sparkle/")

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
  // TEST CASE 4 - SPARKLE APPLY NOW
  // ============================================================

  it("Verify Apply Now button has a valid application link", () => {

    cy.visit("/sparkle/")

    cy.get("a")
      .contains("Apply Now!")
      .should("be.visible")
      .and("have.attr", "href")
      .and("include", "forms.gle")

  })


  // ============================================================
  // TEST CASE 5 - ABOUT US
  // ============================================================

  it("Verify About Us page loads successfully", () => {

    cy.visit("/about-us/")

    cy.url()
      .should("include", "/about-us/")

    cy.get("h1")
      .should("contain", "The Story of Pic-A-Talk")

  })


  // ============================================================
  // TEST CASE 6 - ABOUT PAGE CONTENT
  // ============================================================

  it("Verify Team, Mission, and Vision sections are displayed", () => {

    cy.visit("/about-us/")

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


  // ============================================================
  // TEST CASE 7 - BLOG
  // ============================================================

  it("Verify Blog page loads successfully", () => {

    cy.visit("/blog/")

    cy.url()
      .should("include", "/blog/")

    cy.get("h1")
      .should("contain", "Latest News and Updates")

  })


  // ============================================================
  // TEST CASE 8 - BLOG ARTICLES
  // ============================================================

  it("Verify blog articles are displayed", () => {

    cy.visit("/blog/")

    cy.get("h2")
      .should("have.length.at.least", 1)

    cy.contains("h1", "Older Blogs")
      .should("be.visible")

    cy.get("a")
      .contains("read more")
      .should("exist")

  })


  // ============================================================
  // TEST CASE 9 - CONTACT FORM
  // ============================================================

  it("Verify Contact Us form fields are displayed", () => {

    cy.visit("/contact-us/")

    cy.url()
      .should("include", "/contact-us/")

    cy.get("form")
      .first()
      .should("exist")
      .within(() => {

        cy.get("input")
          .should("have.length.at.least", 2)

        cy.get("select")
          .should("exist")

        cy.get("textarea")
          .should("exist")

        cy.get('button, input[type="submit"]')
          .should("exist")

      })

  })


  // ============================================================
  // TEST CASE 10 - CONTACT INFORMATION
  // ============================================================

  it("Verify contact information is displayed", () => {

    cy.visit("/contact-us/")

    cy.get("body")
      .should("contain", "support@pic-a-talk.com")
      .and("contain", "+639055712641")
      .and("contain", "Iligan City, Philippines")

  })


})