describe("Pic-A-Talk Blog Page Test Cases", () => {

  beforeEach(() => {
    cy.visit("/blog/")
  })


  // ============================================================
  // TEST CASE 1 - BLOG PAGE LOAD
  // ============================================================

  it("Verify Blog page loads successfully", () => {
    cy.url()
      .should("include", "/blog/")

    cy.get("h1")
      .should("contain", "Latest News and Updates")
  })


  // ============================================================
  // TEST CASE 2 - LATEST ARTICLES REDIRECTION
  // ============================================================

  it("Verify latest blog articles redirect to their article pages", () => {

    cy.get("article")
      .then(($articles) => {

        // Current page contains 4 latest articles before Older Blogs
        const latestArticles = [...$articles].slice(0, 4)

        const articleLinks = latestArticles.map((article) => {
          return article.querySelector("h2.entry-title a")?.href
        })

        expect(articleLinks)
          .to.have.length(4)

        articleLinks.forEach((articleLink) => {

          // Return to Blog page before testing the next article
          cy.visit("/blog/")

          cy.get("article h2.entry-title a")
            .then(($links) => {

              const targetArticle = [...$links].find(
                (link) => link.href === articleLink
              )

              expect(targetArticle)
                .to.exist

              cy.wrap(targetArticle)
                .should("be.visible")
                .click()
            })

          // Verify that clicking the article redirects
          cy.url()
            .should("eq", articleLink)

        })

      })

  })


  // ============================================================
  // TEST CASE 3 - ALL 6 OLDER BLOG ARTICLES
  // ============================================================

  it("Verify all 6 Older Blog articles redirect correctly", () => {

    cy.get("article")
      .then(($articles) => {

        const olderArticles = [...$articles].slice(-6)

        expect(olderArticles)
          .to.have.length(6)

        const olderArticleLinks = olderArticles.map((article) => {

          const link = article.querySelector(
            "h2.entry-title a"
          )

          return link?.href

        })

        expect(olderArticleLinks)
          .to.have.length(6)

        olderArticleLinks.forEach((articleLink) => {

          cy.visit("/blog/")

          cy.get("article h2.entry-title a")
            .then(($links) => {

              const targetArticle = [...$links].find(
                (link) => link.href === articleLink
              )

              expect(targetArticle)
                .to.exist

              cy.wrap(targetArticle)
                .scrollIntoView()
                .should("be.visible")
                .click()

            })

          cy.url()
            .should("eq", articleLink)

        })

      })

  })


  // ============================================================
  // TEST CASE 4 - READ MORE LINKS
  // ============================================================

  it("Verify Read More links contain valid article URLs", () => {

    cy.get("a.more-link")
      .should("have.length.at.least", 1)
      .each(($link) => {

        cy.wrap($link)
          .should("be.visible")
          .and("have.attr", "href")
          .and("not.be.empty")

      })

  })

})