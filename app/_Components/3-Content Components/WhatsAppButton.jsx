// components/WhatsAppButton.js
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '212652064823';
  const welcomeMessage = encodeURIComponent(
    'مرحبًا، وصلت هنا عبر موقع KanataJS! كيف يمكنني مساعدتك اليوم؟',
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${welcomeMessage}`}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-32 right-4 p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300'
      style={{ zIndex: 1000 }}
      aria-label='Contact me on WhatsApp'
    >
      <FaWhatsapp className='w-6 h-6' />
    </a>
  );
};

export default WhatsAppButton;
