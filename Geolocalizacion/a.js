
const OPTIONS ={
    method: 'GET',
    header: {

    }
}

const fetchIpInfo = ip =>{
    return fetch()
    .then(res => res.json())
    .catch(err =>console.error(err));
}

const $form = document.querySelector('#form');
const $input = document.querySelector('#input');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const{value}= $input;
    if (!value) return 
const ipInfo = fetchIpInfo(value); 
})
