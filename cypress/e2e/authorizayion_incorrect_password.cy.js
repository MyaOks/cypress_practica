describe('Cypress Test', () => {

  const data = {
    "main_url" : "https://dev.profteam.su",
    "login_url": "/login",
    "account_main": "/account/main",
    "none_existent_login": "test25test",
    "none_valid_login": "test 25 test",
    "login": "testerStudent",
    "none_existent_password": "test",
    "password": "Password1"
  }
  
  it('Неправильный пароль', () => {
    cy.log('Переход на страницу авторизации')
    cy.visit(`${data.main_url}${data.login_url}`)    
  
    cy.log('Ввод верного логина')
    cy.get('input[class="form-input--text form-input"]')
      .type(data.login)
  
    cy.log('Вввод неверного пароля')
    cy.get('input[class="form-input--password form-input"]')
      .type(data.none_existent_password)
  
    cy.log('Клик по кнопке "Войти"')
    cy.get('div[class="login-form__button"] button[type="submit"]')
      .click();

    cy.log('Проверка появления сообщения об ошибке')
    cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
  
    cy.log('Проверка перехода в личный кабинет пользователя')
    cy.url().should('include', `${data.main_url}${data.account_main}`)
  })
})