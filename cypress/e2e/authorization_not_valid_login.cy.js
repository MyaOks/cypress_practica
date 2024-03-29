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
  
    it('Невалидный логин', () => {
        cy.log('Переход на страницу авторизации')
        cy.visit(`${data.main_url}${data.login_url}`)

        cy.log('Ввод невалидного логина')
        cy.get('input[class="form-input--text form-input"]')
            .type(data.none_valid_login)

        cy.log('Проверка появления сообщения об ошибке')
        cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
  
        cy.log('Ввод верного пароля')
        cy.get('input[class="form-input--password form-input"]')
            .type(data.password)
            
        cy.log('Проверка работоспособности кнопки')
        cy.get('div[class="login-form__button"] button[type="submit"]').should('be.disabled')
    })
})