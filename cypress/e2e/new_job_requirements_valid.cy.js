describe('Cypress Test', () => {

    const data = {
      "main_url" : "https://dev.profteam.su",
      "login_url": "/login",
      "login": "testerEmployer",
      "password": "Password1",
    }

    it('Требования - валидация', () => {
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

        cy.log('Клик по вкладке с вакансиями')
        cy.get('div[class="menu-item menu-item--active"]').eq(5)
            .click()

        cy.log('Клик по кнопке "Создать вакансию"')
        cy.get('div[class="vacancies-block__filters-wrapper"] button[type="submit"]').first()
            .click()

        cy.log('Ввод названия вакансии')
        cy.get('div[class="form-control--responsive form-control"] input[class="form-input-- form-input"]').eq(0)
            .type('A', {force: true})

        cy.log('Ввод требований')
        cy.get('div[class="form-control form-control--max"] textarea[class="form-area"]').eq(0)
            .type('A'.repeat(1001))

        cy.log('Проверка появления сообщения об ошибке')
        cy.get('div[class="form-error form-error--responsive form-error-- form-error--"]').should('exist')

        cy.log('Ввод обязанностей')
        cy.get('div[class="form-control form-control--max"] textarea[class="form-area"]').eq(1)
            .type('A')

        //позитивный сценарий
        cy.log('Проверка работоспособности кнопки')
        cy.get('div[class="buttons"] button[type="submit"]').first().should('be.disabled')

        //негативный сценарий
        cy.log('Проверка работоспособности кнопки')
        cy.get('div[class="buttons"] button[type="submit"]').first().should('not.be.disabled')
    })
})