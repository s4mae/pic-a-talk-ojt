describe('Pic-A-Talk Website Tests (Text-based selectors)', () => {
  const baseUrl = 'https://pic-a-talk.com/'

  beforeEach(() => {
    cy.visit(baseUrl)
    cy.wait(2000)
  })

  // Test 1: SPARKLE page
  it('Test 1: Should load SPARKLE page successfully', () => {
    cy.contains('SPARKLE').click()
    cy.url().should('include', 'sparkle')
    cy.contains('SPARKLE').should('be.visible')
  })

  // Test 2: SPARKLE FAQs
  it('Test 2: Should verify FAQs dropdowns functionality in SPARKLE page', () => {
    cy.contains('SPARKLE').click()
    cy.url().should('include', 'sparkle')

    cy.contains('Frequently Asked Questions').scrollIntoView()
    cy.contains('Frequently Asked Questions').should('be.visible')

    // Click each FAQ toggle
    cy.get('.et_pb_toggle').each(($faq) => {
      cy.wrap($faq).click()
      cy.wrap($faq).should('have.class', 'et_pb_toggle_open')
    })
  })

  // Test 3: SPARKLE images
  it('Test 3: Should verify visual content displays correctly in SPARKLE page', () => {
    cy.contains('SPARKLE').click()
    cy.url().should('include', 'sparkle')

    cy.get('img').should('be.visible').each(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  })

  // Test 4: SPARKLE Application
  it('Test 4: Should verify Application section in SPARKLE page', () => {
    cy.contains('SPARKLE').click()
    cy.url().should('include', 'sparkle')

    cy.contains('Application').scrollIntoView()
    cy.contains('Apply Now').should('be.visible').click()
    cy.url().should('include', 'forms.gle')
  })

  // Test 5: Blog page
  it('Test 5: Should load Blog page successfully', () => {
    cy.contains('Blog').click()
    cy.url().should('include', 'blog')
    cy.contains('Blog').should('be.visible')
  })

  // Test 6: Blog pinned post "Read More"
  it('Test 6: Should verify "read more" button in pinned blog', () => {
    cy.contains('Blog').click()
    cy.url().should('include', 'blog')

    cy.get('.et_pb_post').first().within(() => {
      cy.contains('Read More').click()
    })

    cy.url().should('not.include', '/blog')
    cy.get('.et_post_meta_wrapper').should('be.visible')
  })

  // Test 7: Blog pinned post "Here" button
  it('Test 7: Should verify "here" button in pinned blog article', () => {
    cy.contains('Blog').click()
    cy.get('.et_pb_post').first().within(() => {
      cy.contains('Read More').click()
    })
    cy.scrollTo('bottom')
    cy.contains('here', { matchCase: false }).click()
    cy.url().should('include', 'facebook.com')
  })

  // Test 8: All Blog posts
  it('Test 8: Should verify all blog posts are working', () => {
    cy.contains('Blog').click()
    cy.get('.et_pb_post').should('have.length.greaterThan', 0)

    cy.get('.et_pb_post').each(($post, index) => {
      if (index < 3) {
        cy.wrap($post).find('a').first().click()
        cy.get('.et_post_meta_wrapper').should('be.visible')
        cy.go('back')
      }
    })
  })

  // Test 9: Blog pagination
  it('Test 9: Should verify pagination buttons functionality', () => {
    cy.contains('Blog').click()
    cy.scrollTo('bottom')
    cy.contains('Older Entries').click({ force: true })
    cy.get('.et_pb_post').should('be.visible')
  })

  // Test 10: Contact page
  it('Test 10: Should load Contact page successfully', () => {
    cy.contains('Contact').click()
    cy.url().should('include', 'contact')
    cy.contains('Contact').should('be.visible')
  })

  // Test 11a: Contact form validation (empty)
  it('Test 11a: Should show validation errors when submitting empty form', () => {
    cy.contains('Contact').click()
    cy.get('form.wpcf7-form').within(() => {
      cy.contains('Submit').click()
    })
    cy.get('.wpcf7-not-valid-tip').should('be.visible')
  })

  // Test 11b: Contact form valid submission
  it('Test 11b: Should successfully submit contact form with valid data', () => {
    cy.contains('Contact').click()
    cy.get('form.wpcf7-form').within(() => {
      cy.get('input[name="your-name"]').type('John Doe')
      cy.get('input[name="your-email"]').type('john.doe@example.com')
      cy.get('textarea[name="your-message"]').type('This is a test message.')
      cy.contains('Submit').click()
    })
    cy.get('.wpcf7-response-output').should('be.visible')
  })

  // Test 12: Contact FAQs
  it('Test 12: Should verify FAQs dropdowns functionality in Contact page', () => {
    cy.contains('Contact').click()
    cy.contains('Frequently Asked Questions').scrollIntoView()
    cy.get('.et_pb_toggle').each(($faq) => {
      cy.wrap($faq).click()
      cy.wrap($faq).should('have.class', 'et_pb_toggle_open')
    })
  })
})
