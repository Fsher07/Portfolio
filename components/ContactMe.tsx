import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = (formData: Inputs) => {
    window.location.href = `mailto:furkannsalim@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='sectionTitle'>Contact</h3>

      <div className='flex flex-col space-y-16'>
        <h4 className='text-4xl font-semibold text-center flex flex-col'>
          I have got just what you need.{' '}
          <span className='pt-2'>Let&apos;s Talk</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+905302504415</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>furkansalimm@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Antalya, Turkey</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
          action='https://formspree.io/f/xdobgedl'
          method='POST'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              name='user_name'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              type='email'
              name='user_email'
              className='contactInput'
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            name='subject'
            type='text'
          />

          <textarea
            {...register('message')}
            placeholder='Message'
            name='message'
            className='contactInput'
          ></textarea>
          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
