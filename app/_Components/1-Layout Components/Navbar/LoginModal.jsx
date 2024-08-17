import Modal from 'react-modal';

export default function LoginModal({
  modalIsOpen,
  setModalIsOpen,
  loginData,
  handleInputChange,
  handleLoginSubmit,
  loading, // حالة التحميل يتم تمريرها من Navbar
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    >
      <h2 className='text-2xl font-bold mb-6'>Login</h2>
      <form onSubmit={handleLoginSubmit} className='space-y-4'>
        <div>
          <label htmlFor='email' className='block text-gray-700'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={loginData.email}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div>
          <label htmlFor='password' className='block text-gray-700'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            value={loginData.password}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-green-dark text-white py-2 rounded mt-4 flex justify-center items-center'
          disabled={loading}
        >
          {loading ? (
            <svg
              className='animate-spin h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
              ></path>
            </svg>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </Modal>
  );
}
