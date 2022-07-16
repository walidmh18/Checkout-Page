const pro1Qua = document.getElementById('pro1Qua')
const pro2Qua = document.getElementById('pro2Qua')
pro1Qua.defaultValue = '1'
pro2Qua.defaultValue = '1'


function QuSub(id) {
    let next = document.getElementById(id)
    next.value --
}
function QuAdd(id) {
    let next = document.getElementById(id)
    next.value ++
}

