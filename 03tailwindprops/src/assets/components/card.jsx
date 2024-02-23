import PropTypes from "prop-types";
export default function Card({imgText,link,altText,btnText}) {
    console.log("props",{imgText,link,altText,btnText});
  return (
    <>
        <div className="w-[300px] rounded-md border mb-10 mr-10">
          <img
              src={link}
              alt={altText}
              className="h-[16rem] w-full rounded-md object-cover"
          />
          <div className="p-4">
              <h1 className="text-lg font-semibold">{imgText}</h1>
              <p className="mt-3 text-sm text-white-600">
              {imgText}
              </p>
              <button
              type="button"
              className="mt-4 rounded-md bg-black px-2.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
              {btnText}
              </button>
          </div>
        </div>
    </>
  )
}

Card.propTypes = {
  imgText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
