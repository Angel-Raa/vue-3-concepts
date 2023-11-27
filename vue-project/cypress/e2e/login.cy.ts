describe('Login Test Feature', () => {
  it('user can not access to protectd router when is not logged in ', () => {
    cy.visit('/', {failOnStatusCode:false})
    cy.url().should('eq', 'http://localhost:4173/login')
  })
  it('user with wrong credentials can not login ', () => {
    cy.visit('/login')
    cy.get('#email').type('admin@gmail.com')
    cy.get('#password').type('admin12345678')
    cy.get('button').click()
    cy.contains('p','Invalid credentials')
  })
  it('user can login with correct credentials ', () => {
    cy.visit('/login')
    cy.get('#email').type('angel@gmail.com')
    cy.get('#password').type('12345')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:4173/')
    
  })
})
