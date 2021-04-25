import React, { useState } from 'react'
import { useRouter } from 'next/router'
const Search = () => {
  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = useState('')

  const router = useRouter()

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (filter === '') {
      return router.push(`/search/${keyword.replace(/ /g, '-')}`)
    }
    router.push(`/search/${keyword.replace(/ /g, '-')}?filter=${filter}`)
  }

  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          type='text'
          name='search'
          id='serach'
          onChange={handleChangeKeyword}
        />
        <select name='' id='' onChange={handleChangeFilter}>
          <option value=''>Filtro</option>
          <option value='movie'>Movies</option>
          <option value='tv'>series</option>
          <option value='person'>people</option>
        </select>
      </form>
    </section>
  )
}

export default Search
