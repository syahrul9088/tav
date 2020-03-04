const fetch = require('node-fetch');
var randomize = require('randomatic')
const readlineSync = require('readline-sync');
var randomProfile = require('random-profile-generator');

const functionRegist = (nomor, first, last, email, address, city, state, reff) => new Promise((resolve, reject) => {
    const bodys = {
        firstName: first,
        lastName: last,
        email: email,
        password: "Japro908@",
        address: address,
        city: city,
        state: state,
        country: "AT",
        phoneNo: `+62 831${nomor}`,
        referrer: reff, //1A1l5V@6
        role: "User"
    }

fetch('https://finder.tavecchiacoin.com/api/v1/auth/register?app=true&phone=true', { 
    method: 'POST', 
    body: JSON.stringify(bodys),
    headers: {
        'Host': 'finder.tavecchiacoin.com',
        'Connection': 'keep-alive',
        'Content-Length': 232,
        'Accept': 'application/json, text/plain, */*',
        'Origin': 'http://localhost:8080',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; G011A Build/LMY48Z) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36',
        'Content-Type': 'application/json',
        'Referer': 'http://localhost:8080/',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US',
        'X-Requested-With': 'com.tavecchiacoin.finder'
    }
})
.then(res => res.json())
.then(result => {
    resolve(result);
})
.catch(err => reject(err))
});

(async () => {
    const reff = readlineSync.question('[?] Reff code: ')
    const jumlah = readlineSync.question('[?] Jumlah reff: ')
    for (var i = 0; i < jumlah; i++){
    try {
        var profile = randomProfile.profile();
        const nomor = randomize('0', 8)
        const first = profile.firstName
        const last = profile.lastName
        const rand = randomize('a', 10)
        const email = `${rand}@gmail.com`
        const address = profile.address
        const city = randomize('aA', 8)
        const state = randomize('aA', 9)
        const regist = await functionRegist(nomor, first, last, email, address, city, state, reff)
        console.log(`[!] ${regist.message}`)
    } catch (e) {
        console.log(e)
    }
    }
})()