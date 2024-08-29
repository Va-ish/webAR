import React, { useState } from 'react'

const Form = () => {
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectDetails, setProjectDetails] = useState('')
  const [result, setResult] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceChange = (e) => setService(e.target.value)
  const handleBudgetChange = (e) => setBudget(e.target.value)
  const handleNameChange = (e) => setName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleProjectDetailsChange = (e) => setProjectDetails(e.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // setResult('Sending....');
    const formData = new FormData()

    formData.append('service', service)
    formData.append('budget', budget)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('projectDetails', projectDetails)
    formData.append('access_key', 'f2832a00-e257-4822-b8ad-cdbe025a4940')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      console.log('API Response:', data)

      if (data.success) {
        // setResult('Form Submitted Successfully');
        setIsModalOpen(true)
        event.target.reset()
      } else {
        setResult(`Error: ${data.message || 'Unknown error occurred'}`)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setResult('An error occurred while sending the form.')
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="app-container py-8 rounded-lg shadow-lg md:py-20">
      <br />
      <h2 className="text-white text-3xl mb-2">
        Lets Connect
      </h2>
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="text-white text-2xl font-normal mb-2">Service</p>
          <br />
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setService('Media Production')}
            >
              Media Production
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setService('Software Development')}
            >
              Software Development
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setService('Game Development')}
            >
              Game Development
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setService('AR/VR Development')}
            >
              AR/VR Development
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setService('Internet of Things')}
            >
              Internet of Things
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setService('Digital Marketing')}
            >
              Digital Marketing
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setService('Others')}
            >
              Others
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className="mb-6">
          <p className="text-white text-2xl font-normal mb-2">
            Budget (in INR)
          </p>
          <br />
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setBudget('10k-50k')}
            >
              10k-50k
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setBudget('50k-100k')}
            >
              50k-100k
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setBudget('100k-500k')}
            >
              100k-500k
            </button>
            <button
              type="button"
              className="py-4 px-5 text-sm font-medium text-white border border-gray-500 rounded-full bg-transparent hover:bg-gray-800 hover:border-gray-300 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-transparent dark:text-white dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:border-gray-600"
              onClick={() => setBudget('More than 500k')}
            >
              More than 500k
            </button>
            <br />
          </div>
        </div>
        <br />
        <br />
        <div className="mb-6">
          <p className="text-white text-2xl font-normal mb-2">
            About You/Organization
          </p>
          <br />
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className="flex-1 border-b-2 border-primary-600 bg-transparent text-primary-100 p-2 mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="flex-1 border-b-2 border-primary-600 bg-transparent text-primary-100 p-2 mb-4"
            />
          </div>
          <textarea
            name="projectDetails"
            placeholder="Project Details (optional)"
            value={projectDetails}
            onChange={handleProjectDetailsChange}
            className="block w-full border-b-2 border-primary-600 bg-transparent text-primary-100 p-2"
          />
        </div>
        {/* <button
          type="submit"
          className="text-primary-100 py-4 px-6 text-4xl hover:bg-gray-200 transition duration-300 relative"
        >
          DISCUSS PROJECT
          <span className="absolute left-0 right-0 bottom-0 w-full h-0.5 transition-all border-b-2 border-gray-500 mt-2"></span>
        </button> */}
        <br />
        {/* <button
        type="submit"
        className='m-6 group w-max px-1 text-4xl text-primary-100 relative z-10'>DISCUSS PROJECT
      <span class="px-1 text-4xl text-primary-100 relative z-10 group-hover:text-primary-900"></span>
      <span class="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-primary-100 z-0 group-hover:h-full "></span>
      {/* </p> */}
        {/* </button>  */}
        {/* <p class="text-lg m-6 group relative w-max"> */}

        <button type="submit">
          <p className="text-lg group relative w-max">
            <span className="px-1 relative font-bold text-4xl text-primary-100 z-10 group-hover:text-primary-900">
              DISCUSS PROJECT
            </span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-primary-100 z-0 group-hover:h-full "></span>
          </p>
        </button>

        <p className="text-white mt-4">{result}</p>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-primary-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Form Submitted Successfully</h2>
            <p className="mb-4">
              Thank you for submitting the form. We will get back to you soon.
            </p>

            {/* button hover - normal */}
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-primary-800 text-white rounded-xl hover:bg-primary-600 transition duration-200"
            >
              Close
            </button>

            {/* Button hover type 1 */}
            {/* <button
              onClick={closeModal}
              class="relative h-[50px] w-20 flex items-center justify-center overflow-hidden bg-primary-600 font-medium text-primary-50 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-primary-800 before:duration-100 before:ease-linear hover:bg-primary-100 hover:text-white hover:shadow-white hover:before:border-[25px]"
            >
              <span class="relative z-10">Close</span>
            </button> */}

            {/* button hover type 2 */}
            {/* <button onClick={closeModal}>
  <p class="text-lg m-6 group relative w-max">
      <span class="relative text-xl text-primary-100 z-10 group-hover:text-primary-900">Close</span>
      <span class="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-primary-100 z-0 group-hover:h-full "></span>
      </p>
</button> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Form
