import HomeView from './HomeView.vue'

describe('<HomeView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HomeView)
  })
})