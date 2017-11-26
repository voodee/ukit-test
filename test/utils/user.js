import conf from '../conf'
import faker from 'faker'

// авторизация
export const signIn = (email, password) => {
	browser.url(`${conf.host}signIn`)
		// вводим имя и пароль
		.setValue('#sign_in_email', email)
		.setValue('#sign_in_password', password)
		.click('#sign_in_btn')
		// ждём попадания в дашбоард
		.waitForExist('#js-main.d-content')
}

// регистрация
export const signInUp = () => {

	browser.url(`${conf.host}signUp`)
		.waitForVisible('#sign_up_email')

    const email = 'ukit-test-' + faker.fake('{{internet.email}}')
    const password = faker.fake('{{internet.password}}')
    browser
		.setValue('#sign_up_email', email)
		.setValue('#sign_up_password', password)

    browser.click('#sign_up_btn')
	// ждём попадания в визард
    browser.element('.w-tmpls .w-tmpl').waitForVisible()

	return {email, password}

}
