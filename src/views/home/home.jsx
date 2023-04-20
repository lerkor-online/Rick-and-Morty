import Cards from '../../components/Cards/Cards';



function Home({characters, onClose}){

    return (
                      
          <div>
            <Cards characters={characters}  onClose={onClose}/>
          </div>
        
      )
    }
    
    export default Home;