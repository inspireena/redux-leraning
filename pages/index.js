import { useReducer, useState } from 'react'
import { connect, useDispatch, useSelector } from "react-redux"
import { setInfo, setInfoAge, setInfoBoo } from "../redux/actions/main"
import styles from '../styles/Home.module.css'


function Home(props) {
  const { name, age, boo } = useSelector(state => state.main)
  const [newName, setName] = useState("")
  const [newAge, setAge] = useState("")
  const dispatch = useDispatch();
  console.log('state of boolean', boo, age)
  return (
    <div className={styles.container}>

      {<div

        style={{ backgroundColor: boo ? 'green' : 'red', width: '200px', height: '100px', color: 'balck', fontSize: '20px' }}
      >
        sfs
      </div>}

      <button
        onClick={() => dispatch(setInfoBoo(!boo))}
      >
        boolean value
      </button>
      <p> age of {name} is {age}</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setName(e.target.value)}>

      </input>
      <input
        type="text"
        value={newAge}
        onChange={(e) => setAge(e.target.value)}>

      </input>
      <button onClick={() => {
        dispatch(setInfo(newName))
        dispatch(setInfoAge(newAge))
      }}>
        Submit
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return { name: state.main.name, age: state.main.age, boo: state.main.boo, }
}

const mapDispatchToProps = {
  setInfo,
  setInfoAge,
  setInfoBoo
}

export default Home