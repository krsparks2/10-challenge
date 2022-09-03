const Manager = require("../lib/Manager");

test('Does this create a new manager object', ()=>{
    const man = new Intern('Name', 2, 3, 'test@email.com')
    expect(man.name).toBe('Name')
    expect(man.getName()).toBe('Name')
})

test('Does this track the manager email', ()=>{
    const int =  new Intern ('Name', 2, 3, 'test@email.com')
    expect(int.school).toBe('U of A')
    expect(int.getSchool()).toBe('test@email.com')
})