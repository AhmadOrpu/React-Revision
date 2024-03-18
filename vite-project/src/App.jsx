

const App = () => {
  const postFormData=(event)=>{
    event.preventDefault();
    alert('Opps Clicked')
  }
  
  return (
    <div>
        <form onSubmit={postFormData}>
              <input type="search" name="" id="" />
              <button>Submit</button>
        </form>
    </div>
  );
};

export default App;