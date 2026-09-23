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

it("Verify selected latest blog articles redirect correctly", () => {

  const latestArticles = [0, 1]

  latestArticles.forEach((index) => {

    cy.visit("/blog/")

    cy.get("article")
      .eq(index)
      .find("h2.entry-title a")
      .should("be.visible")
      .invoke("prop", "href")
      .then((expectedUrl) => {

        cy.get("article")
          .eq(index)
          .find("h2.entry-title a")
          .click()

        cy.url()
          .should("eq", expectedUrl)

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
})