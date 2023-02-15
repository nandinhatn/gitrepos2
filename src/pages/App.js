import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo';
import gitlogo from '../assets/logo.png'
import Button  from '../components/Button';
import {Container} from './styles'
import { useState } from 'react';
import {api} from '../services/api';


function App() {
const [currentRepo, setCurrentRepo]= useState('')
const [repos, setRepos] = useState([])
const handleSearchRepo = async() =>{
  console.log('cliquei')
  const {data} = await api.get(`repos/${currentRepo}`)
  console.log(data)
  if(data.id){
    const isExist = repos.find(repo => repo.id==data.id)
    if(!isExist){
      setRepos(prev =>[...prev, data]);

    
      setCurrentRepo('')
      console.log(repos)
      return
    }
  
  }
  alert('Repos não encontrado')
}
const handleRemoveRepo = (id) =>{
  console.log('removendo registro',  id)
  console.log(repos)

 console.log( repos.filter( repo => repo.id != id))
 setRepos(repos.filter( repo => repo.id != id))


}
  return (
    <Container>
    <img src={gitlogo} alt="foto"/>
    <Input  onChange={(e)=> setCurrentRepo(e.target.value)}/>
    <Button onClick={handleSearchRepo}/>
  
{repos.map(repo =>    <ItemRepo handleRemoveRepo={handleRemoveRepo}repo={repo} />)}
 
    
    </Container>
  );
}

export default App;
