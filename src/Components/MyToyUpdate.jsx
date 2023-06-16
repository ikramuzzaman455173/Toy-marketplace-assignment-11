import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/Authprovider';
import useTitle from '../MyHooks/DynamicTitle';
import InfoText from '../Pages/SharedPage/InfoText';
import ToysRusBanner from '../Pages/SharedPage/ToysRusBanner';

const UpdateToy = () => {
  const { user } = useContext(AuthContext)
  const toyData = useLoaderData()
  // console.log(toyData);
  const [mydata, setMydata] = useState(toyData)
  const { id } = useParams()
  useTitle('MyToy Update Page')
  // console.log(id);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const seller_name = form.name.value
    const seller_email = form.email.value
    const toysname = form.toysname.value
    const price = parseFloat(form.price.value)
    const rating = parseFloat(form.rating.value)
    const quantity = parseInt(form.quantity.value)
    const description = form.description.value
    const updateToy = { seller_name, seller_email, toysname, price, rating, quantity, description}
    // console.log(updateToy);
    fetch(`http://localhost:4000/allToys/${id}`, {
          method: "PUT",
          headers: {
            'content-type':'application/json'
        },
          body:JSON.stringify(updateToy)
        })
          .then(response => response.json())
          .then(data => {
            if (data.modifiedCount) {
              // console.log(data)
              toast('Update Toy Data Successfully !!!', { autoClose: 2000 })
              setMydata(data)
            }
          }).catch(error=>console.log(`404 page not found ${error.message}`))
          // input field blank after the form submit
          // event.target.reset()
  };


  return (
    <>
      <ToysRusBanner heading="Page Update Toy" />
      <div>
        <form onSubmit={handleSubmit} className="max-w-md bg-slate-100 text-accent mx-auto my-20 border-2 p-4 rounded-md shadow-md">
          <InfoText title="Update Toy"></InfoText>
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
                defaultValue={mydata.toysname}
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
                defaultValue={mydata.price}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Toy Rating*
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Toy Price"
                required
                className="form-input"
                defaultValue={mydata.rating}
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
                defaultValue={mydata.quantity}
              />
            </div>

          </div>
          <div className='mb-4'>
            <label htmlFor="textarea" className="block text-gray-700 text-sm font-bold mb-2">
              Toy Details Description:*
            </label>
            <textarea required name='description'
              className="form-input"
              defaultValue={mydata.description}
            />
          </div>

          <button
            type="submit"
            className="block w-full px-4 py-2 font-bold awesome-btn rounded-md"
          >
            Update Toy
          </button>
        </form>
      </div>
    </>
  )
}

export default UpdateToy