const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

async function fetchData(){
    let data = await fetch(url)
    let respos = await data.json()
    console.log(respos)
}
fetchData()

