describe('Cypress Test',() => {

  const data = {
    "main_url" : "https://dev.profteam.su",
    "login_url": "/login",
    "login": "testerStudent",
    "password": "Password1",
  }

  it ('Просмотр уведомлений',() => {
    cy.log('Переход на страницу авторизации')
    cy.visit(`${data.main_url}${data.login_url}`)
  
    cy.log('Ввод логина')
    cy.get('input[class="form-input--text form-input"]')
      .type(data.login)
    
    cy.log('Ввод пароля')
    cy.get('input[class="form-input--password form-input"]')
      .type(data.password)
    
    cy.log('Клик по кнопке "Войти"')
    cy.get('div[class="login-form__button"] button[type="submit"]')
      .click()

    cy.wait(2000)
    cy.log('Клик по кнопке "Уведомление')
    cy.get('a[class="header__item"]').eq(3)
      .click()
  
    cy.log('Проверка результата')
    cy.get('aside[class="notifications-list"]')
      .should('exist')      
  })
})