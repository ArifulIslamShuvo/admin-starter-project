function Search({value, setState}) {
  return (
    <div className='search_wrapper'>
        <input 
          type="text" 
          className='input_field' 
          placeholder='Search here'
          value={value}
          onChange={e => setState(e.target.value)}
        />
    </div>
  )
}

export default Search