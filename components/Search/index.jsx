import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const SearchSection = styled.section`
  width: 95%;
  max-width: 700px;
  margin: 40px auto;
`
const Form = styled.form`
  width: 100%;
  height: 50px;
  border: 2px solid white;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.4);
  button {
    width: 50px;
    height: 100%;
    border-radius: 25px 0 0 25px;
    background: none;
    border: none;
    cursor: pointer;
    i {
      color: white;
      font-size: 20px;
      font-family: 'solid icon';
    }
  }
  input[type='text'] {
    width: calc(100% - 150px);
    height: 100%;
    padding: 10px;
    border: none;
    background: none;
    color: white;
    font-size: 16px;
    outline: none;
  }
  input[type='text']::placeholder {
    color: white;
  }
  select {
    width: 100px;
    height: 100%;
    padding: 10px;
    border: none;
    background: none;
    color: white;
    font-size: 16px;
    outline: none;
  }
`

const Search = ({ search = '' }) => {
  const [keyword, setKeyword] = useState(search)
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
    <SearchSection>
      <Form onSubmit={handleSubmit}>
        <button>
          <i></i>
        </button>
        <input
          type='text'
          name='search'
          id='serach'
          onChange={handleChangeKeyword}
          placeholder='Search...'
          value={keyword}
        />
        <select name='' id='' onChange={handleChangeFilter}>
          <option value=''>Filtro</option>
          <option value='movie'>Movies</option>
          <option value='tv'>series</option>
          <option value='person'>people</option>
        </select>
      </Form>
    </SearchSection>
  )
}

export default Search
