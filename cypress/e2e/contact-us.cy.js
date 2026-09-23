describe("Pic-A-Talk Contact Us Page Test Cases", () => {

  beforeEach(() => {
    cy.visit("/contact-us/")
  })


  // ============================================================
  // TEST CASE 1 - CONTACT PAGE LOAD
  // ============================================================

  it("Verify Contact Us page loads successfully", () => {

    cy.url()
      .should("include", "/contact-us/")

    cy.contains("h1", "Get In Touch with Us!")
      .should("be.visible")

  })


  // ============================================================
  // TEST CASE 2 - NAME INPUT
  // ============================================================

  it("Verify user can enter a value in the Name field", () => {

    const testName = "Rjay Cereno"


    cy.get(
      'input[placeholder="Name"], input[name*="name"], input[id*="name"]'
    )
      .filter(":visible")
      .first()
      .clear()
      .type(testName)
      .should("have.value", testName)

  })


  // ============================================================
  // TEST CASE 3 - EMAIL INPUT
  // ============================================================

  it("Verify user can enter a valid email address", () => {

  const testEmail = "test@example.com"

  cy.get(
    'input[placeholder="Email Address"], input[data-field_type="email"], input[data-original_id="email"]'
  )
    .filter(":visible")
    .first()
    .clear()
    .type(testEmail)
    .should("have.value", testEmail)

 })


  // ============================================================
  // TEST CASE 4 - TYPE OF INQUIRY DROPDOWN
  // ============================================================

  it("Verify Type of Inquiry dropdown can be selected", () => {

    cy.get("select")
      .filter(":visible")
      .first()
      .then(($select) => {

        const availableOptions = [
          ...$select[0].options
        ].filter((option) => {

          return (
            option.value !== "" &&
            !option.disabled
          )

        })

        expect(availableOptions.length)
          .to.be.greaterThan(0)

        const selectedValue =
          availableOptions[0].value

        cy.wrap($select)
          .select(selectedValue)
          .should(
            "have.value",
            selectedValue
          )

      })

  })


  // ============================================================
  // TEST CASE 5 - MESSAGE INPUT
  // ============================================================

  it("Verify user can enter a message", () => {

    const testMessage =
      "This is a Cypress test message."

    cy.get("textarea")
      .filter(":visible")
      .first()
      .clear()
      .type(testMessage)
      .should(
        "have.value",
        testMessage
      )

  })


  // ============================================================
  // TEST CASE 6 - COMPLETE CONTACT FORM INPUT
  // ============================================================

  it("Verify user can fill out the Contact Us form", () => {

    const testName = "Rjay Cereno"
    const testEmail = "test@example.com"
    const testMessage =
      "I would like to know more about Pic-A-Talk."

    // Name
    cy.get(
      'input[placeholder="Name"], input[name*="name"], input[id*="name"]'
    )
      .filter(":visible")
      .first()
      .clear()
      .type(testName)
      .should(
        "have.value",
        testName
      )

    // Email
    cy.get(
    'input[placeholder="Email Address"], input[data-field_type="email"], input[data-original_id="email"]'
    )
    .filter(":visible")
    .first()
    .clear()
    .type(testEmail)
    .should(
        "have.value",
        testEmail
    )

    // Type of Inquiry
    cy.get("select")
      .filter(":visible")
      .first()
      .then(($select) => {

        const options = [
          ...$select[0].options
        ].filter(
          (option) =>
            option.value !== "" &&
            !option.disabled
        )

        const selectedValue =
          options[0].value


        cy.wrap($select)
          .select(selectedValue)
          .should(
            "have.value",
            selectedValue
          )

      })

    // Message
    cy.get("textarea")
      .filter(":visible")
      .first()
      .clear()
      .type(testMessage)
      .should(
        "have.value",
        testMessage
      )

  })


  // ============================================================
  // TEST CASE 7 - FAQ
  // ============================================================

  it("Verify Frequently Asked Questions can be opened", () => {

    cy.contains(
      "h2",
      "Frequently Asked Questions"
    )
      .should("be.visible")

    cy.get(".et_pb_toggle")
      .should(
        "have.length.at.least",
        1
      )
      .each(($faq) => {

        if (!$faq.hasClass("et_pb_toggle_open")) {

          cy.wrap($faq)
            .find(".et_pb_toggle_title")
            .scrollIntoView()
            .click()

        }

        // FAQ should now be selected/open
        cy.wrap($faq)
          .should(
            "have.class",
            "et_pb_toggle_open"
          )

        // FAQ answer should be displayed
        cy.wrap($faq)
          .find(".et_pb_toggle_content")
          .should("be.visible")
          .invoke("text")
          .should("not.be.empty")

      })

  })


  // ============================================================
  // TEST CASE 8 - CONTACT INFORMATION
  // ============================================================

  it("Verify contact information is displayed", () => {

    cy.get("body")
      .should(
        "contain",
        "support@pic-a-talk.com"
      )
      .and(
        "contain",
        "+639055712641"
      )
      .and(
        "contain",
        "Iligan City, Philippines"
      )

  })

})