import { useState } from 'react'

import { HeaderContainer } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { useGithubData } from '../../hooks/DataContext'

/**
 * Componente Header
 * contêm o input para a pesquisa dos repositórios. A comunicação com a api
 * para buscar o repositório é realizada pelo hook useGithubData com o valor do input.
 * @returns Header React Component
 */
export function Header() {
  const [ searchText, setSearchText ] = useState('')
  const { getDataRepositories } = useGithubData()

  async function handleSearchData(event) {
    event.preventDefault()

    if (searchText.trim() === '') {
      return
    }

    await getDataRepositories(searchText)
  }

  return (
    <HeaderContainer>
      <AiFillGithub size={40}/>
      <form onSubmit={handleSearchData}>
        <input 
          type="text"
          onChange={event => setSearchText(event.target.value)}
          value={searchText}
          placeholder="Search or jump to..."
        />
      </form>
    </HeaderContainer>
  );
}