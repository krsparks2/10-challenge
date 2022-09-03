
const Intern = require("../lib/Intern");

test('Does this create a new Intern object', ()=>{
    const int = new Intern('Name', 2, 'test@email.com', 'U of A')
    expect(int.name).toBe('Name')
    expect(int.getName()).toBe('Name')
})

test('Does this track the Intern school', ()=>{
    const int =  new Intern ('Name', 2, 'test@email.com', 'U of A')
    expect(int.school).toBe('U of A')
    expect(int.getSchool()).toBe('U of A')
})