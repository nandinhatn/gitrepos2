import React from 'react'
import { ItemContainer } from './styles';
 function ItemRepo({repo, handleRemoveRepo}) {
  const handleRemove =()=>{
    handleRemoveRepo(repo.id)

  }
  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
    <p>{repo.full_name}</p>
    <a href={repo.clone_url} target='_blank'>Ver repositório</a><br></br>
    <a className='remove' href='#'>Remove</a>

    <hr/>
        </ItemContainer>
  )
}

export default ItemRepo;
