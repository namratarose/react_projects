import './App.css'
import Card from './assets/components/card.jsx'
function App() {
  let animal1={
    imgText:"Cats",
    link:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:"cats",
    btnText:"click to see"
  }
  let animal2={
    imgText:"Dogs",
    link:"https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:"dogs",
    btnText:"click to see"
  }
  let animal3={
    imgText:"Giraffe",
    link:"https://images.unsplash.com/photo-1559090336-3b19608e6a41?q=80&w=3327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:"giraffe",
    btnText:"click to see"
  }
  let animal4={
    imgText:"Bird",
    link:"https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:"bird",
    btnText:"click to see"
  }
  let allCardArray=[animal1,animal2,animal3,animal4]

  return (
    <>
      <h1 className='mb-10'>Animal Cards</h1>
      <div className="card">
        {/* <Card imgText={animal1.imgText} link={animal1.link} altText={animal1.altText} btnText={animal1.btnText}/> */}
        {
          allCardArray.map((obj,index) => {
            return <Card key={index} imgText={obj.imgText} link={obj.link} altText={obj.altText} btnText={obj.btnText}/>
          }) //use map in place of foreach          
        }
      </div>  
    </>
  )
}

export default App
