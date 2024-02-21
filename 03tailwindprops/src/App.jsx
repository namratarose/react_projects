import './App.css'
import Card from './assets/components/card'
function App() {
  let animal1={
    imgText:"Cats",
    link:"https://unsplash.com/photos/brown-tabby-kitten-sitting-on-floor-nKC772R_qog",
    altText:"cats",
    btnText:"click to see"
  }
  let animal2={
    imgText:"Dogs",
    link:"https://unsplash.com/photos/brown-short-coated-dog-in-orange-hoodie-oU6KZTXhuvk",
    altText:"dogs",
    btnText:"click to see"
  }
  let animal3={
    imgText:"Giraffe",
    link:"https://unsplash.com/photos/selective-focus-photo-of-giraffe-D6TqIa-tWRY",
    altText:"giraffe",
    btnText:"click to see"
  }
  let animal4={
    imgText:"Bird",
    link:"https://unsplash.com/photos/shallow-focus-photography-of-multi-colored-bird-7_TTPznVIQI",
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
          allCardArray.forEach(obj => (
            <Card props={{...obj}}/>
          ))
        }
      </div>  
    </>
  )
}

export default App
