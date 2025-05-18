import { useEffect, useState, useRef } from 'react'
import './App.css'
import "./components/card.css";
import Navbar from './components/nav.jsx'
import Button from './components/Button.jsx'
import Card from './components/card.jsx'

function App() {

  const [activebtn, setActivebtn] = useState("all")
  const [extensionData, setExtensionData] = useState([]) // all data
  const [activeExtension, setActiveExtensionData] = useState([]) // active data
  const [inActiveExtension, setInActiveExtension] = useState([]) // inactive data
  const [isDakModeOn, setDarkMode] = useState(true)
  let body = useRef(null) // access html element

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("/data.json");
        let convert = await res.json();
        setExtensionData(convert);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

  }, [])

  //for darkmode
  useEffect(() => {
    toggleDarkAndLightMode()
  }, [isDakModeOn])

  //toggle dark and light mode
  const toggleDarkAndLightMode = () => {

    if (!body.current) return

    body.current.classList.remove("dark", "light")

    isDakModeOn ? body.current.classList.add("dark") : body.current.classList.add("light")
  }

  const removeExtension = (name) => {
    let newExtensionList = extensionData.filter((data) => (data.name !== name))
    setExtensionData(newExtensionList)

    let newActiveExtensionList = activeExtension.filter((data) => (data.name !== name))
    setActiveExtensionData(newActiveExtensionList)

    let newInactiveExtensionList = inActiveExtension.filter((data) => (data.name !== name))
    setInActiveExtension(newInactiveExtensionList)
  }

  const toggleActiveAndInactiveState = (name) => {
    let newExtensionList = extensionData.map((data) => (data.name === name ? { ...data, isActive: !data.isActive } : data))
    setExtensionData(newExtensionList)

    // Refresh active and inactive lists
    let activeList = newExtensionList.filter((data) => data.isActive);
    let inactiveList = newExtensionList.filter((data) => !data.isActive);

    setActiveExtensionData(activeList);
    setInActiveExtension(inactiveList);
  }

  const activeExtensionData = () => {
    let activeExtensionList = extensionData.filter((data) => data.isActive === true)
    setActiveExtensionData(activeExtensionList)
  }

  const inActiveExtensionData = () => {
    let inActiveExtensionList = extensionData.filter((data) => data.isActive === false)
    setInActiveExtension(inActiveExtensionList)
  }

  return (
    <div className='w-screen h-[100dvh] py-[20px] overflow-auto bg-gradient-to-t dark:from-[#091540] dark:to-[#040918] from-[#EBF2FC] to-[#EEF8F9]' ref={body}>
      <div className='w-[95%] sm:w-[82%] mx-auto'>
        <Navbar darkModeFn={setDarkMode} isDakModeOn={isDakModeOn} />

        <div className=' mt-[20px] sm:mt-[40px] mb-[30px] flex flex-col items-center sm:flex-row sm:items-center sm:justify-between ' >
          <h1 className='dark:text-white text-[#121b40] text-[30px] font-bold'>Extensions List</h1>
          <div className='flex justify-around w-[100%] mt-[10px] gap-x-[12px] sm:mt-[0px] sm:w-auto'>

            <Button text="All" ID="all" trackState={activebtn} event={setActivebtn} />
            <Button text="Active" ID="active" trackState={activebtn} event={setActivebtn} showList={activeExtensionData} />
            <Button text="Inactive" ID="inactive" trackState={activebtn} event={setActivebtn} showList={inActiveExtensionData} />

          </div>
        </div>

        {/* all extension lists */}
        <div className='flex gap-[20px] flex-wrap'>
          {
            activebtn === "all" && extensionData.map((data) => (
              <div key={data.name} className='dynamicWidth'>
              <Card {...data}  removeExtension={removeExtension} toggleActiveAndInactiveState={toggleActiveAndInactiveState} />
              </div>
            ))
          }

          {
            activebtn === "active" && activeExtension.map((data, index) => (
              <div key={data.name} className='dynamicWidth'>
              <Card {...data} key={index} removeExtension={removeExtension} toggleActiveAndInactiveState={toggleActiveAndInactiveState} />
              </div>
            ))
          }

          {
            activebtn === "inactive" && inActiveExtension.map((data, index) => (
              <div key={data.name} className='dynamicWidth'>
              <Card {...data} key={index} removeExtension={removeExtension} toggleActiveAndInactiveState={toggleActiveAndInactiveState} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
