import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../MyHooks/DynamicTitle'
import ToysRusBanner from '../Pages/SharedPage/ToysRusBanner'

const AllToys = () => {
  const [toysData, setToysData] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [sortingOrder, setSortingOrder] = useState("");
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    fetch(`http://localhost:4000/totalToys`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTotalItems(data.count)
      }).catch(error => console.log(`404 page not found ${error}`))
  }, [])

  useTitle('AllToys Page')

  useEffect(() => {
    fetch(`http://localhost:4000/allToys?sort=${sortingOrder}&limit=${limit}&page=${page}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setToysData(data);
        // Filter the toy data based on the search query
        const filteredData = data.filter(toy =>
          toy.toysname.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setToysData(filteredData);

        // Sort the filtered data based on sorting order
        let sortedData = filteredData;
        if (sortingOrder === "ascName") {
          sortedData = filteredData.sort((a, b) =>
            a.toysname.localeCompare(b.toysname)
          );
        } else if (sortingOrder === "descName") {
          sortedData = filteredData.sort((a, b) =>
            b.toysname.localeCompare(a.toysname)
          );
        }
        setToysData(sortedData);
      })
      .catch(error => console.log(`404 page not found ${error}`));
  }, [searchQuery, sortingOrder, page, limit]); // Include searchQuery and sortingOrder as dependencies

  return (
    <>
      <ToysRusBanner heading="Page AllToys" />



      <div className="flex flex-col mx-10 mt-16">
        <div className="overflow-x-auto ">
          <div className="py-3 pl-2 flex items-center justify-between">
            <div className="relative max-w-xs border-4 rounded-md shadow-sm outline-none">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full outline-none text-xl p-3 pl-10 border-gray-200 rounded-md"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>

            <select className="select w-full max-w-xs bg-slate-600 text-white tracking-wider" onChange={(e) => setSortingOrder(e.target.value)}>
              <option disabled>All Products Sort</option>
              <option className='bg-slate-700 text-primary font-medium' value="asc">Ascending Toys By Price</option>
              <option className='bg-slate-700 text-primary font-medium' value="desc">Descending Toys By Price</option>
              <option className='bg-slate-700 text-primary font-medium' value="ascName">Ascending Toys By Name</option>
              <option className='bg-slate-700 text-primary font-medium' value="descName">Descending Toys By Name</option>
            </select>


          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden overflow-x-auto border rounded-md w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-slate-700">
                  <tr>
                    <th
                      scope="col"
                      className="flex items-center table-th"
                    >
                      ID
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 13l-5 5m0 0l-5-5m5 5V6"
                        />
                      </svg>
                    </th>
                    <th
                      scope="col"
                      className="table-th"
                    >
                      <span className="inline-flex items-center">
                        Seller Name
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 11l5-5m0 0l5 5m-5-5v12"
                          />
                        </svg>
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="table-th"
                    >
                      <span className="inline-flex items-center">
                        Toy Name
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 13l-5 5m0 0l-5-5m5 5V6"
                          />
                        </svg>
                      </span>
                    </th>


                    <th
                      scope="col"
                      className="table-th"
                    >
                      <span className="inline-flex items-center">
                        Sub-category
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 11l5-5m0 0l5 5m-5-5v12"
                          />
                        </svg>
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="table-th"
                    >
                      <span className="inline-flex items-center">
                        Price
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 13l-5 5m0 0l-5-5m5 5V6"
                          />
                        </svg>
                      </span>
                    </th>


                    <th
                      scope="col"
                      className="table-th"
                    >
                      <span className="inline-flex items-center">
                        Quantity
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 11l5-5m0 0l5 5m-5-5v12"
                          />
                        </svg>
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="table-th"
                    >
                      <span className="inline-flex items-center">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 13l-5 5m0 0l-5-5m5 5V6"
                          />
                        </svg>
                      </span>
                    </th>


                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {toysData?.map((toys, index) => {
                    return (
                      <tr key={toys._id}>
                        <td className="px-6 py-4 text-sm text-slate-700 font-bold text-[17px] whitespace-nowrap">
                          {/* {pageNumbers?.map(num=><p>{num}</p>)} */}
                           {(page - 1) * limit + index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700 font-bold text-[17px] whitespace-nowrap">
                          {toys.seller_name}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700 font-bold text-[17px] whitespace-nowrap">
                          {toys.toysname}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700 font-bold text-[17px] whitespace-nowrap">
                          {toys.subcategory}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700 font-bold text-[17px] whitespace-nowrap">
                          <span className='text-accent text-bold'>$ </span>{toys.price}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700 font-bold text-[17px] whitespace-nowrap">
                          {toys.quantity}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700 font-bold text-[17px] whitespace-nowrap">
                          <Link to={`/toy/${toys._id}`} className="awesome-btn p-2 px-5 rounded-md tracking-wider mt-4">
                            View Details
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="join text-center mx-20 my-20">
          <button className="join-item btn" onClick={() => {
            page === 1 ? setPage(1) : setPage(page - 1)
          }} disabled={page === 1}>«</button>
          <button className="join-item btn">Page {page}</button>
          <button className="join-item btn" onClick={() => {
            page === Math.round(totalItems / limit) ? setPage(Math.round(totalItems / limit)) : setPage(page + 1)
          }} disabled={page === Math.round(totalItems / limit)}>»</button>
        </div>

        <select className="select select-success w-full max-w-xs mx-20" value={limit} onChange={e => setLimit(e.target.value)}>
          <option disabled>Select Show The View 1 Page Total Items?</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
    </>
  )
}

export default AllToys
