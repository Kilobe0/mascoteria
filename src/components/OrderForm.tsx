// src/components/forms/OrderForm.tsx
'use client';

import { useState } from 'react';
import { Dictionary } from '@/lib/dictionaries';

// O formulário recebe apenas a parte do dicionário que ele precisa
interface OrderFormProps {
  dict: Dictionary['orderPage']['form'];
}

const OrderForm: React.FC<OrderFormProps> = ({ dict }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, company });
    alert('Obrigado! Seus dados foram enviados.');
    setName('');
    setEmail('');
    setCompany('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {dict.name}
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {dict.email}
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
        <p className="mt-1 text-xs text-gray-500">{dict.emailHelper}</p>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          {dict.company}
        </label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        {dict.button}
      </button>
    </form>
  );
};

export default OrderForm;