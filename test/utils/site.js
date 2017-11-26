import conf from '../conf'

// создание сайта
export const create = (email, password) => {
	browser
		.url(`${conf.host}/neowizard/`)
		.waitForExist('.w-tmpls .w-tmpl:first-child')
	// выбираем первый шаблон
	browser.click('.w-tmpls .w-tmpl:first-child')
		.waitForExist('.w-next-step')
	// типа выбираем домен и жмём далее
	browser.click('.js-next-btn')
		.waitForExist('.js-steps-list li')
	// переходим на последний шаг визарда
	browser.click('.js-steps-list li:last-child')
		// ждём появления надписи "Сайт готов"
		.waitForExist('.w-steps-site-ready')
	// нажимаем "далее"
	browser.click('.js-next-step-btn')
		// ждём попадания в конструктор
		.waitForExist('.ul-main.js-main')

	const site = browser.execute(() => window.cache.site).value

	return site
}
