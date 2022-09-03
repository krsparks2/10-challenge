
const Engineer = require("../lib/Engineer");

test('Does this create a new engineer object', ()=>{
    const eng = new Engineer('Name', 2, 'test@email.com', 'test@github.com')
    expect(eng.name).toBe('Name')
    expect(eng.getName()).toBe('Name')
})

test('Does this track the employee github', ()=>{
    const eng =  new Engineer ('Name', 2, 'test@email.com', 'test@github.com')
    expect(eng.github).toBe('test@github.com')
    expect(eng.getGithub()).toBe('test@github.com')
})