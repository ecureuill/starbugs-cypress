import '@testing-library/cypress/add-commands'

Cypress.Commands.add('buyCoffee', (product) =>{
  const coffeeItem = cy.get('h1').contains(product).parent()
  const button = coffeeItem.find('button.buy-coffee')
  button.click()
})

Cypress.Commands.add('selectPaymentType', (type) => {
  switch (type) {
    case 'Cartão de Crédito':
      cy.get('label[for=credit]').click();
      break;
    case 'Cartão de Débito':
      cy.get('label[for=debit]').click();
      break;
    case 'À vista no PIX':
      cy.get('label[for=pix]').click();
      break;
    default:
      throw new Error(`Unsupported payment type: ${paymentType}`);
  }
})

Cypress.Commands.add('applyCoupon', (coupon) => {
  cy.findByPlaceholderText('Código do cupom').type(coupon);
  cy.get('.button-coupon').click();
})