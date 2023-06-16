import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/Authprovider';
import useTitle from '../MyHooks/DynamicTitle';
import InfoText from '../Pages/SharedPage/InfoText';
import ToysRusBanner from '../Pages/SharedPage/ToysRusBanner';

const AddToy = () => {
  const { user } = useContext(AuthContext)
  useTitle('Add New Toy')
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const seller_name = form.name.value
    const seller_email = form.email.value
    const toysname = form.toysname.value
    const toyimg = form.toyimg.value
    const price = parseFloat(form.price.value)
    const rating = parseFloat(form.rating.value)
    const quantity = parseInt(form.quantity.value)
    const description = form.description.value
    const subcategory = form.subcategory.value
    const newToy = { seller_name, seller_email, toysname, toyimg, price, rating, quantity, description, subcategory }
    // console.log(newToy);
    fetch(`http://localhost:4000/allToys`, {
          method: "POST",
          headers: {
            'content-type':'application/json'
          },
          body:JSON.stringify(newToy)
        })
          .then(response => response.json())
          .then(data => {
            if (data.insertedId) {
              // console.log(data)
              toast('New Toy Added Successfully !!!',{ autoClose: 2000 })
            }
          }).catch(error=>console.log(`404 page not found ${error.message}`))
          // input field blank after the form submit
          event.target.reset()
  };

  return (
    <>
      <ToysRusBanner heading="New Toy Add" />
      <div>
        <form onSubmit={handleSubmit} className="max-w-md bg-slate-100 text-accent mx-auto my-20 border-2 p-4 rounded-md shadow-md">
          <InfoText title="Add New Toy"></InfoText>
          <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-4'>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">
                Seller Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                required
                className="form-input"
                disabled
                defaultValue={user.displayName}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Seller Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
                className="form-input"
                disabled
                defaultValue={user.email}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Toy Name*
              </label>
              <input
                type="text"
                name="toysname"
                placeholder="Enter Toy Name"
                required
                className="form-input"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Toy Photo Url*
              </label>
              <input
                type="text"
                name="toyimg"
                placeholder="Toy Photo Url"
                required
                className="form-input"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Toy Price*
              </label>
              <input
                type="number"
                name="price"
                placeholder="Toy Price"
                required
                className="form-input"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Toy Rating*
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating Toy"
                required
                className="form-input"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Toy Quantity*
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity Toy"
                required
                className="form-input"
              />
            </div>

            <div className='mb-10'>
              <label htmlFor="category" className="block mb-1 font-medium">
                Select a category:*
              </label>
              <select name="subcategory" required className="form-input">
                <option value=""> Select a Toy category </option>
                <option value="Marvel">Marvel</option>
                <option value="Star Wars">Star Wars</option>
                <option value="Transformers">Transformers</option>
                <option value="Avengers">Avengers</option>
                {/* Add more category options here */}
              </select>
            </div>

          </div>
          <div className='mb-4'>
            <label htmlFor="textarea" className="block text-gray-700 text-sm font-bold mb-2">
              Toy Details Description:*
            </label>
            <textarea required name='description'
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="block w-full px-4 py-2 font-bold awesome-btn rounded-md"
          >
            Add Toy
          </button>
        </form>
      </div>
    </>
  )
}

export default AddToy
