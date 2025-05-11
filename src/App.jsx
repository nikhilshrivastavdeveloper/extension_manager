import { useEffect, useState} from 'react'
import './App.css'
import Navbar from './components/nav.jsx'
import Button from './components/Button.jsx'
import Card from './components/card.jsx'

function App() {

  const [activebtn, setActivebtn] = useState("all")
  const [extensionData, setExtensionData] = useState([]) // all data
  const [activeExtension, setActiveExtensionData] = useState([]) // active data
  const [inActiveExtension, setInActiveExtension] = useState([]) // inactive data

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
    <div className='w-screen h-[100dvh] py-[20px] overflow-auto bg-gradient-to-t dark:from-[#091540] dark:to-[#040918]'>
      <div className='w-[95%] sm:w-[82%] mx-auto'>
        <Navbar />

        <div className=' mt-[20px] sm:mt-[40px] mb-[30px] flex flex-col items-center sm:flex-row sm:items-center sm:justify-between ' >
          <h1 className='text-white text-[30px] font-bold'>Extensions List</h1>
          <div className='flex justify-around w-[100%] mt-[10px] gap-x-[12px] sm:mt-[0px] sm:w-auto'>

            <Button text="All" ID="all" trackState={activebtn} event={setActivebtn} />
            <Button text="Active" ID="active" trackState={activebtn} event={setActivebtn} showList={activeExtensionData}/>
            <Button text="Inactive" ID="inactive" trackState={activebtn} event={setActivebtn} showList={inActiveExtensionData} />

          </div>
        </div>

        {/* all extension lists */}
        <div className='flex gap-[20px] flex-wrap'>
          {
            activebtn === "all" && extensionData.map((data, index) => (
              <Card {...data} key={index} removeExtension={removeExtension} toggleActiveAndInactiveState={toggleActiveAndInactiveState} />
            ))
          }

          {
            activebtn === "active" && activeExtension.map((data, index) => (
              <Card {...data} key={index} removeExtension={removeExtension} toggleActiveAndInactiveState={toggleActiveAndInactiveState} />
            ))
          }

          {
            activebtn === "inactive" && inActiveExtension.map((data, index) => (
              <Card {...data} key={index} removeExtension={removeExtension} toggleActiveAndInactiveState={toggleActiveAndInactiveState} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
