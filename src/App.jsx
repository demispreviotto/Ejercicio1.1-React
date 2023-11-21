import './App.css'
import Person from './components/Person'
import PersonClass from './components/PersonClass'
const users = [
  { id: new Date().getUTCMilliseconds(), name: 'Peter', surname: "Parker", age: 20 },
  { id: new Date().getUTCMilliseconds(), name: 'Bruce', surname: "Banner", age: 42 },
  { id: new Date().getUTCMilliseconds(), name: 'Matt', surname: "Murdock", age: 36 },
]

function App() {
  return (
    <>
      {users.map((user) => (
        <>
          <Person
            key={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
          />
          <PersonClass name={user.name} />
        </>
      )
      )}
    </>
  )
}

export default App
