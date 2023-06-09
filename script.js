const input =document.querySelector('input');
const form =document.querySelector('form')
const show = document.querySelector('.display')
//console.log(show)
let text 
async function fetchData(){
    const url=`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${input.value}`;
    show.innerHTML='<h2>Loading...</h2>'
    try{
        let data = await fetch(url)
        let respos = await data.json()
        show.innerHTML=''
        console.log(respos)
        const news=respos.query.search
        news.map((item)=>{
            const {title,snippet,pageid}=item
            display(pageid,title,snippet)
        })
    }catch(error){
        console.log(error)
    }
}

function display(id, topic , paragraph){
    let container = document.createElement('a')
    // let attr =
    // console.log(attr)
    container.setAttribute('href',`http://en.wikipedia.org/?curid=${id}`)
    container.setAttribute('target','_blank')
    container.innerHTML=`<h1>${topic}</h1>
            <p>
                ${paragraph}
            </p>`
    show.appendChild(container)
}
//display()

input.addEventListener('input',(e)=>{
   text = e.target.value
   console.log(text)
})
form.addEventListener('submit',(e)=>{
    show.innerHTML=''
    fetchData()
    e.preventDefault()
    if(input.value==""){
        show.innerHTML="<h3> Empty search</h3>"
    }
})


