describe('Cypress Test', () => {

    const data = {
      "main_url" : "https://dev.profteam.su",
      "registration_url": "/registration",
      "login": "hahaha",
      "none_valid_login": "тест 25 тест",
      "password1": "Hohoho1",
      "none_valid_password1": "hohoho1",
      "password2": "Hohoho12",
      "email": "haho@mail.ru",
      "none_valid_email": "sdfsd@"
    }

    it('Несовпадение паролей', () => {
        cy.log('Переход на страницу регистрации')
        cy.visit(`${data.main_url}${data.registration_url}`)

        cy.log('Ввод логина')
        cy.get('input[class="form-input--text form-input"]').first()
          .type(data.login)
    
        cy.log('Ввод почты')
        cy.get('input[class="form-input--email form-input"]').first()
          .type(data.email)
    
        cy.log('Ввод пароля')
        let pass = data.password1
        cy.get('input[class="form-input--password form-input"]').first()
          .type(pass)
    
        cy.log('Ещё раз ввод пароля')
        let confirm = data.password2
        cy.get('input[class="form-input--password form-input"]').eq(1)
          .type(confirm)
    
        if(pass == confirm){
           //позитивный сценарий
           cy.log('Проверка работоспособности кнопки')
           cy.get('div[class="registration-form__button"] button[type="submit"]').eq(2).should('not.be.disabled')
 
           //негативный сценарий
           cy.log('Проверка работоспособности кнопки')
           cy.get('div[class="registration-form__button"] button[type="submit"]').eq(2).should('be.disabled')
          
        } else {
         //позитивный сценарий
          cy.log('Проверка работоспособности кнопки')
          cy.get('div[class="registration-form__button"] button[type="submit"]').eq(2).should('be.disabled')

          cy.log('Проверка появления сообщения об ошибке')
          cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

          //негативный сценарий
          cy.log('Проверка работоспособности кнопки')
          cy.get('div[class="registration-form__button"] button[type="submit"]').eq(2).should('not.be.disabled')
        }
    })
})
