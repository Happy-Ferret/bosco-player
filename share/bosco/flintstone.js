const version = '0.0.42'

let _context
function attach(context) {
    _context = context
    context.attach('wilma')
    return this
}

function detach() {
    _context.detach()
    
}
