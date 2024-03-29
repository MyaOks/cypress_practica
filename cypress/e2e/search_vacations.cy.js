describe('Cypress Test',() => {

    const data = {
        "main_url" : "https://dev.profteam.su",
        "login_url": "/login",
        "login": "testerStudent",
        "password": "Password1",
        "search_query": "Инженер-программист"
      }

    it ('Успешный поиск',() => {

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

        cy.wait(3000)
        cy.log('Клик по кнопке "Вакансии')
        cy.get('a[class="header__item"]').first()
            .click()
  
        cy.log('Ввод запросa')
        cy.get('input[class="form-input--text form-input search-input__field"]')
            .type(data.search_query)
  
        cy.log('Клик по кнопке "Поиск')
        cy.get('div[class="search-input__field"] button[type="submit"]')
            .click()
  
        cy.log('Проверка результата')
        cy.get('div[class="vacancy-item vacancy-item--approved"]')
            .should('exist')   
  })
})