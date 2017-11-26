import conf from '../conf'

import { signIn, signInUp } from '../utils/user'
import { create as createSite } from '../utils/site'

describe('Backup', () => {


    // it('should have the right title - the fancy generator way', () => {
    //     browser.url('https://ukit.com')
    //     browser.getTitle().should.be.equal('uKit — Конструктор сайтов для бизнеса.')
    // });


    it('check create backup', () => {
        // const email = ''
        // const password = ''
        // // авторизация
        // signIn(email, password)
        // создание нового пользователя
        const {email, password} = signInUp()
        // создание сайта
        const site = createSite()

        // переходим в конструктор
        browser
            .url(`${conf.host}sites/url/${site}/pages/id/index/constructor`)
            .waitForVisible('.ul-main-menu .js-panel-action[data-panel="panelBackups"]')
        // охуеваем от клиентского кода (ждём скрытия лоадера)
        browser.waitUntil(() => $$('.ul-left-menu.ul-loader').length === 0)
        // нажимаем кнопку бэкапы
        browser
            .click('.ul-main-menu .js-panel-action[data-panel="panelBackups"]')
        	.waitForVisible('.js-historyPanel-backups-add')
        // запоминаем текущее кол-во бэкапов
        const backupCount = $$('.ul-backup-items > div').length

        // нажимаем кнопку создать бэкап
        browser
            .click('.js-historyPanel-backups-add')
            .waitForExist('.ul-notify__msg', 30000)
        // ждём изменения списка бэкапов
        browser.waitUntil(() => $$('.ul-backup-items > div').length !== backupCount)
        // кол-во бэкапов должно увеличиться на один
        expect($$('.ul-backup-items > div').length).to.be.equal(backupCount + 1)
    })

});
