export default function Card(props) {
    console.log("props",props);
  return (
    <>
        <div className="w-[300px] rounded-md border mb-10 mr-10">
        <img
            src={this.props.link}
            alt={this.props.altText}
            className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
            <h1 className="text-lg font-semibold">About Macbook</h1>
            <p className="mt-3 text-sm text-white-600">
            {this.props.imgText}
            </p>
            <button
            type="button"
            className="mt-4 rounded-md bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
            {this.props.btnText}
            </button>
        </div>
        </div>
    </>
  )
}
