import React, { useContext, useEffect, useState } from 'react';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/Authprovider';
import useTitle from '../MyHooks/DynamicTitle';
import ToysRusBanner from '../Pages/SharedPage/ToysRusBanner';


const MyToys = () => {
  const [mydata, setMydata] = useState([])
  const { user } = useContext(AuthContext)
  useTitle('MyToys Page')
  useEffect(() => {
    fetch(`http://localhost:4000/myToys?seller_email=${user.email}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setMydata(data)
      }).catch(error=>console.log(`404 page not found ${error}`))
  }, [])


  {/* ====delete specific toy===== */}

    const handleDeleteToy = (id) => {
      // console.log(`handleDeleteProduct`, id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:4000/allToys/${id}`, {
            method: "DELETE",
          })
            .then(response => response.json())
            .then(data => {
              if (data.deletedCount > 0) {
                // console.log(data)
                Swal.fire(
                  'Deleted!',
                  'Your toy has been deleted.',
                  'success'
                )
                const remaing = mydata.filter(item => item._id !== id)
                setMydata(remaing)
              }
            })
        }
      })
        .catch(error => console.log(`404 page not found error:${error.message}`))
    }




  return (
    <>
      <ToysRusBanner heading="My Toy Page" />
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="table-head">
                      ID
                    </th>
                    <th className="table-head">
                      Seller Name
                    </th>
                    <th className="table-head">
                      Seller Email
                    </th>
                    <th className="table-head">
                      Toy Name
                    </th>
                    <th className="table-head">
                      Toy Img
                    </th>
                    <th className="table-head">
                      SubCategory
                    </th>
                    <th className="table-head">
                      View Details
                    </th>
                    <th className="table-head">
                      Update
                    </th>
                    <th className="table-head">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mydata.map((toys, index) => {
                    return (
                      <tr key={toys._id}>
                    <td className="table-data">{index+1}</td>
                    <td className="table-data">{toys.seller_name}</td>
                    <td className="table-data">{toys.seller_email}</td>
                    <td className="table-data">{toys.toysname}</td>
                    <td className="table-data">
                      <img className='w-[50px] h-[50px] border-2 border-accent rounded' src={toys.toyimg} alt="toy img" />
                    </td>
                    <td className="table-data">{toys.subcategory}</td>
                    <td className="table-data">
                    <Link to={`/toy/${toys._id}`} className="awesome-btn p-2 px-5 rounded-md tracking-wider mt-4">
                        View Details
                      </Link>
                    </td>

                    <td className="table-data">
                      <Link to={`/updateToy/${toys._id}`} className="mr-2">
                        <FaEdit className='text-slate-500 active:text-primary md:text-2xl text-xl mt-5' />
                      </Link>
                    </td>
                    <td className='table-data'>
                      <button onClick={()=>handleDeleteToy(toys._id)}>
                        <FaTrashAlt className='text-red-500 active:text-red-600 md:text-2xl text-xl mt-2' />
                      </button>
                    </td>
                  </tr>
                    )
                  })}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyToys;
