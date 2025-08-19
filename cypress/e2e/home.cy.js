describe('Pic-A-Talk - Home Page', () => {

  beforeEach(() => {
    cy.visit('https://pic-a-talk.com');
  });

  it('TC001 - Verify Contact Banner visibility and functionality', () => {
    cy.get('div.et_pb_section_0')
      .should('contain.text', 'Give Us A Call: 0905-571-2641')
      .and('contain.text', 'hq@pic-a-talk.com');

    cy.contains('hq@pic-a-talk.com')
      .should('have.attr', 'href')
      .and('include', 'mailto:hq@pic-a-talk.com');

    cy.contains('0905-571-2641')
      .should('have.attr', 'href')
      .and('include', 'Tel:0905-571-2641');
  });

  it('TC002 - Verify header links visibility', () => {
    ['SPARKLE', 'About', 'Blog', 'Pricing', 'Contact'].forEach(link => {
      cy.get('div.et_pb_menu__menu').should('contain.text', link);
    });
  });

  it('TC003 - Verify header navigation functionality', () => {
    const links = ['SPARKLE', 'About', 'Blog', 'Pricing', 'Contact'];
    links.forEach(link => {
      cy.contains(link).click();
      cy.url().should('include', link.toLowerCase());
      cy.go('back');
    });
  });

  it('TC004 - Verify download buttons', () => {
  const expectedLinks = [
    'play.google.com',
    'apps.apple.com'
  ];

  cy.get('div.et_pb_code_0 a').each(($a, index) => {
    cy.wrap($a)
      .should('have.attr', 'href')
      .and('include', expectedLinks[index]);
  });
});

  it('TC005 - Verify promotional video plays', () => {
    cy.contains('Choose Pic-A-Talk').scrollIntoView();
    cy.get('div.et_pb_video_box video').should('be.visible').then($video => {
      $video[0].play();
      expect($video[0].paused).to.be.false;
    });
  });

  it('TC006 - Verify visibility of visual content', () => {
  const mediaSelectors = ['img', 'video'];

  function checkMediaVisibility() {
    mediaSelectors.forEach((selector) => {
      cy.get(selector)
        .filter(':visible')
        .each(($el) => {
          cy.wrap($el).should('be.visible');
        });
    });
  }

  // Desktop
  cy.viewport('macbook-15');
  cy.scrollTo('bottom');
  checkMediaVisibility();

  // Mobile
  cy.viewport('iphone-6');
  cy.scrollTo('bottom');
  checkMediaVisibility();

  cy.viewport('macbook-15');
});

  it('TC007 - Verify "Learn More" button', () => {
    cy.get('div.et_pb_text_9 ').scrollIntoView();
    cy.contains('Learn More').click();
  });

 it('TC008 - Verify "Learn How" button', () => {
  cy.get('div.et_pb_button_1_wrapper a', { timeout: 10000 })
    .scrollIntoView()
    .should('be.visible')
    .and('contain.text', 'Learn how')
    .click();
});

it('TC009 - Verify "Become an Affiliate Partner" button', () => {
  cy.get('div.et_pb_blurb_0').scrollIntoView();

  cy.contains('Become an Affiliate Partner')
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', 'forms.gle/mFiJv3Di8r5nwHEn8');
});


  it('TC010 - Verify "Become an Impact Partner" button', () => {
    cy.get('div.et_pb_blurb_1').scrollIntoView();

  cy.contains('Become an Impact Partner')
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', 'forms.gle/mFiJv3Di8r5nwHEn8');
  });

});
