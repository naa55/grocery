import React, {useState} from 'react'

const Search = ({data}) => {
    const [search, setSearch] = useState('');
    const [listFilter, setListFilter] = useState([])

    const handleChange = (e) => {
         setSearch(e.target.value)
         const filter = data.filter(s => s.day.includes(search));
         setListFilter(filter);
    }
    
  return (
    <div className='mt-12 text-center'>
        <div>
            <input type="text" placeholder='search by day' className='border-2 border-blue-500 p-4' value={search} onChange={handleChange}/>
        </div>
        {console.log(listFilter)}
        {listFilter.length <= 0 ? 'Nothing Found':
            <div className='mt-2'>
                <div>
                  <p>{search? search  +  ' has subtotal of ' + listFilter.map((a) => parseInt(a.price)).reduce((a, b) => a + b) + '.00ghc breads':''}</p>
                </div>
            </div>}
    </div>
  )
}

export default Search