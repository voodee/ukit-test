import faker from 'faker'


describe('env', () => {

    it('test es 6', async () => {
        const str = faker.fake("{{lorem.word}}");
        const value = await (new Promise(res => setTimeout(() => res(str), 2000)))
        expect(value).to.be.equal(str)
    })

})
